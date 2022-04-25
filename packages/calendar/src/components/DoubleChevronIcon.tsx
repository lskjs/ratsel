import React, { FC } from 'react';

interface IconProps {
  reverse?: boolean;
}

export const DoubleChevronIcon: FC<IconProps> = ({ reverse }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: reverse ? 'rotate(180deg) translateX(1px)' : 'rotate(0deg)',
    }}
  >
    <path
      d="M8.66699 11.3333L12.0003 7.99996L8.66699 4.66663"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.66699 11.3333L12.0003 7.99996L8.66699 4.66663"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 11.3333L7.33333 7.99996L4 4.66663"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 11.3333L7.33333 7.99996L4 4.66663"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
