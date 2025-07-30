import React from 'react';
import { tv } from 'tailwind-variants';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'large' | 'medium' | 'small' | 'xSmall';
  primary?: boolean;
  label: string | React.ReactNode;
  beforeIcon?: React.ReactNode;
  afterIcon?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {
    size = 'medium',
    label,
    beforeIcon,
    afterIcon,
    primary = true,
    ...rest
  } = props;

  return (
    <button type="button" className={buttonSize({ size, primary })} {...rest}>
      {beforeIcon && <span className="mr-2">{beforeIcon}</span>}
      {label}
      {afterIcon && <span className="ml-2">{afterIcon}</span>}
    </button>
  );
};

const buttonSize = tv({
  base: [
    'rounded-14',
    'rounded-[24px]',
    'transition-colors',
    'duration-200',
    'cursor-pointer',
    'flex',
    'items-center',
    'justify-center',
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
        'border-1 border-[var(--text-300)]',
        'text-[var(--text-800)]',
        'hover:border-[var(--text-200)]',
        'active:border-[var(--text-500)]',
        'disabled:border-primary-1/10',
        'disabled:text-primary-2/20',
        'disabled:cursor-not-allowed',
      ],
    },
    size: {
      large: ['body-large-regular', 'w-34', 'h-12'],
      medium: ['body-medium-medium', 'w-34', 'h-11'],
      small: ['body-medium-medium', 'w-32', 'h-10'],
      xSmall: ['body-small', 'w-27', 'h-9'],
    },
  },
  defaultVariants: {
    primary: true,
  },
});
