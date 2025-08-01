import React from 'react';
import { tv } from 'tailwind-variants';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'large' | 'medium' | 'small' | 'xSmall';
  primary?: boolean;
  children: string | React.ReactNode;
  beforeIcon?: React.ReactNode;
  afterIcon?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {
    size = 'medium',
    children,
    beforeIcon,
    afterIcon,
    primary = true,
    ...rest
  } = props;

  return (
    <button
      type="button"
      {...rest}
      className={buttonSize({ size, primary, className: rest.className })}
    >
      {beforeIcon && <span className="mr-2">{beforeIcon}</span>}
      {children}
      {afterIcon && <span className="ml-2">{afterIcon}</span>}
    </button>
  );
};

const buttonSize = tv({
  base: [
    'flex',
    'rounded-14',
    'rounded-[24px]',
    'transition-colors',
    'duration-200',
    'cursor-pointer',
    'items-center',
    'justify-center',
    'body-large-bold',
    'min-w-44',
    'px-4',
  ],
  variants: {
    primary: {
      true: [
        'bg-primary-1',
        'text-white',
        'hover:bg-primary-1/10',
        'hover:text-primary-1',
        'active:bg-primary-1',
        'active:text-white',
        'disabled:bg-primary-1/10',
        'disabled:text-primary-2/20',
        'disabled:cursor-not-allowed',
      ],
      false: [
        'border-text-300 border-1',
        'text-text-800',
        'hover:border-text-200',
        'active:border-text-500',
        'disabled:border-primary-1/10',
        'disabled:text-primary-2/20',
        'disabled:cursor-not-allowed',
      ],
    },
    size: {
      large: ['body-large-bold', 'h-12'],
      medium: ['body-medium-medium', 'h-11'],
      small: ['body-medium-medium', 'h-10'],
      xSmall: ['body-small', 'h-9'],
    },
  },
  defaultVariants: {
    primary: true,
    size: 'large',
  },
});
