/* eslint-disable max-len */
import React, { FC } from 'react';

interface IconProps {
  reverse?: boolean;
}

export const ChevronIcon: FC<IconProps> = ({ reverse }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: reverse ? 'rotate(180deg) translateX(1px)' : 'rotate(0deg)',
    }}
  >
    <path
      d="M8.2097 16.3871C7.90468 16.7794 7.93241 17.3466 8.29289 17.7071C8.68342 18.0976 9.31658 18.0976 9.70711 17.7071L14.7071 12.7071L14.7903 12.6129C15.0953 12.2206 15.0676 11.6534 14.7071 11.2929L9.70711 6.29289L9.6129 6.20971C9.22061 5.90468 8.65338 5.93241 8.29289 6.29289C7.90237 6.68342 7.90237 7.31658 8.29289 7.70711L12.5858 12L8.29289 16.2929L8.2097 16.3871Z"
      fill="currentColor"
    />
  </svg>
);
