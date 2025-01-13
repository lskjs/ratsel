import type { FC, ReactNode } from 'react';
import React from 'react';

import type { IconProps } from './Avatar.styles';
import { Icon, Wrapper } from './Avatar.styles';
import type { AvatarBaseProps } from './AvatarBase';
import { AvatarBase } from './AvatarBase';

interface AvatarProps extends AvatarBaseProps, IconProps {
  icon?: ReactNode | string;
  [key: string]: unknown;
}

export const Avatar: FC<AvatarProps> = ({
  title = '',
  src,
  srcs,
  size = 64,
  width,
  height,
  placeholder,
  shape = 'circle',
  style = {},
  innerStyle = {},
  defaultAvatar,
  icon,
  iconColor,
  iconPosition = 'br',
  iconBackground,
  objectFit,
  scrollPosition,
  native,
  loading,
  ...props
}) => (
  <Wrapper shape={shape} objectFit={objectFit}>
    <AvatarBase
      title={title}
      src={src}
      srcs={srcs}
      size={size}
      width={width}
      height={height}
      placeholder={placeholder}
      shape={shape}
      style={style}
      innerStyle={innerStyle}
      defaultAvatar={defaultAvatar}
      scrollPosition={scrollPosition}
      native={native}
      loading={loading}
      {...props}
    >
      {icon && (
        <Icon iconColor={iconColor} iconPosition={iconPosition} iconBackground={iconBackground}>
          {icon}
        </Icon>
      )}
    </AvatarBase>
  </Wrapper>
);
