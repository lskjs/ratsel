import React, { CSSProperties, FC, HTMLProps, PropsWithChildren, useEffect, useState } from 'react';
import { LazyLoadImage, ScrollPosition } from 'react-lazy-load-image-component';

import { WrapperProps } from './Avatar.styles';

export interface AvatarBaseProps
  extends WrapperProps,
    Omit<HTMLProps<HTMLImageElement>, 'shape' | 'loading'> {
  title?: string;
  srcs: Array<string>;
  avatar?: string;
  size?: number;
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
  placeholder?: string;
  innerStyle?: CSSProperties;
  defaultAvatar?: string;
  scrollPosition?: ScrollPosition;
  native?: boolean;
  loading?: 'eager' | 'lazy' | undefined;
}

export const AvatarBase: FC<PropsWithChildren<AvatarBaseProps>> = (props) => {
  const alt = props.alt || props.title || props.name;
  const title = props.title || props.name;
  const src = props.src || props.avatar;
  const { srcs } = props;
  const rawRealSrc = srcs?.[0] || src || props.defaultAvatar;

  const [realSrc, setRealSrc] = useState(rawRealSrc);

  useEffect(() => {
    if (rawRealSrc && rawRealSrc !== realSrc) {
      setRealSrc(rawRealSrc);
    }
  }, [rawRealSrc]);

  const wrapperStyle = {
    display: 'flex',
    position: 'relative',
    width: props.width || props.size,
    height: props.height || props.size,
    ...(props.style || {}),
  };

  const getInnerStyle = () => {
    const color = props.backgroundColor;

    const width = props.width || props.size;
    const height = props.height || props.size;

    let borderRadius = 'none';
    if (props.shape === 'circle') {
      borderRadius = '50%';
    } else if (props.shape === 'rounded') {
      borderRadius = '6px';
    }

    return {
      boxSizing: 'border-box',
      maxWidth: '100%',
      objectFit: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width,
      height,
      borderRadius,
      backgroundColor: src ? 'rgba(0, 0, 0, 0)' : color,
      ...(props.innerStyle || {}),
    };
  };

  const selectNextSrc = (url: string | undefined) => {
    if (!srcs || !Array.isArray(srcs)) return null;
    const currentIdx = srcs.indexOf(realSrc || '');
    let idx = srcs.indexOf(url || '');
    if (currentIdx === idx) idx += 1;

    if (idx < 0 || idx >= srcs.length) return null;
    return srcs[idx];
  };

  const errorHandler = () => {
    let nextUrl = selectNextSrc(realSrc);
    if (!nextUrl && props.defaultAvatar) {
      nextUrl = props.defaultAvatar;
    }
    setRealSrc(nextUrl as string);
  };

  return (
    <div className={props.className} style={wrapperStyle as CSSProperties}>
      {props.native ? (
        <img
          alt={alt}
          loading={props.loading}
          src={realSrc}
          style={getInnerStyle() as CSSProperties}
        />
      ) : (
        <LazyLoadImage
          alt={alt}
          title={title}
          placeholderSrc={props.defaultAvatar}
          src={realSrc}
          effect="opacity"
          style={getInnerStyle() as CSSProperties}
          scrollPosition={props.scrollPosition}
          onError={errorHandler}
        />
      )}
      {props.children}
    </div>
  );
};
