import React from 'react';
import { tv } from 'tailwind-variants';

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  className?: string;
  sizes?: 'lg' | 'md' | 'sm' | 'xsm';
}

const containerTv = tv({
  base: 'relative inline-flex h-[34px] w-[60px] cursor-pointer items-center select-none',
  variants: {
    sizes: {
      lg: 'h-[34px] w-[60px]',
      md: 'h-[28px] w-[48px]',
      sm: 'h-[16px] w-[32px]',
      xsm: 'h-[16px] w-[28px]',
    },
  },
  defaultVariants: {
    sizes: 'lg',
  },
});

const trackTv = tv({
  base: 'absolute inset-0 rounded-full transition-colors duration-200',
  variants: {
    checked: {
      true: 'bg-primary-1', // verde, pode ajustar para sua cor primária
      false: 'bg-[#f0f0f0]',
    },
  },
  defaultVariants: {
    checked: false,
  },
});

const thumbTv = tv({
  base: [
    'absolute left-1 rounded-full bg-white shadow-md transition-transform duration-200',
    'border border-[#e5e5e5]',
  ],
  variants: {
    checked: {
      true: '',
      false: '',
    },
    sizes: {
      lg: 'h-[28px] w-[28px]',
      md: 'h-[20px] w-[20px]',
      sm: 'h-[14px] w-[14px]',
      xsm: 'h-[12px] w-[12px]',
    },
  },
  compoundVariants: [
    {
      checked: true,
      sizes: 'lg',
      class: 'translate-x-[26px]',
    },
    {
      checked: true,
      sizes: 'md',
      class: 'translate-x-[20px]',
    },
    {
      checked: true,
      sizes: 'sm',
      class: 'translate-x-[12px]',
    },
    {
      checked: true,
      sizes: 'xsm',
      class: 'translate-x-[10px]',
    },
    {
      checked: false,
      class: 'translate-x-0',
    },
  ],
  defaultVariants: {
    checked: false,
    sizes: 'lg',
  },
});

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, checked, onChange, disabled, sizes, ...rest }, ref) => {
    return (
      <label
        className={containerTv({ className, sizes })}
        role="switch"
        aria-checked={checked}
        tabIndex={disabled ? -1 : 0}
        style={{
          opacity: disabled ? 0.6 : 1,
          pointerEvents: disabled ? 'none' : undefined,
        }}
      >
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="sr-only"
          {...rest}
        />
        <div className={trackTv({ checked: !!checked })} />
        <div className={thumbTv({ checked: !!checked, sizes })} />
      </label>
    );
  }
);

Switch.displayName = 'Switch';
