import React, { CSSProperties, FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { WrapperProps } from './Avatar.styles';

export interface AvatarBaseProps extends WrapperProps {
  title?: string;
  src: string;
  avatar?: string;
  name?: string;
  alt?: string;
  size?: number;
  className?: string;
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
  placeholder?: string;
  style?: CSSProperties;
  innerStyle?: CSSProperties;
  defaultAvatar?: string;
}

export const AvatarBase: FC<AvatarBaseProps> = (props) => {
  const alt = props.alt || props.title || props.name;
  const title = props.title || props.name;
  const src = props.src || props.avatar;
  const realSrc = src || props.defaultAvatar;

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

  return (
    <div className={props.className} style={wrapperStyle as CSSProperties}>
      <LazyLoadImage
        alt={alt}
        title={title}
        placeholderSrc={props.defaultAvatar}
        src={realSrc}
        effect="opacity"
        style={getInnerStyle() as CSSProperties}
      />
      {props.children}
    </div>
  );
};
