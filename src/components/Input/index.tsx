import { AlertCircle } from '@/components/icons/fill';
import { CloseOutline } from '@/components/icons/outline';
import React, { useRef } from 'react';
import { tv } from 'tailwind-variants';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  sizes?: 'large' | 'medium' | 'small' | 'xSmall';
  beforeIcon?: React.ReactNode;
  onClear?: () => void;
  showClear?: boolean;
  label?: string;
  helperText?: string;
  error?: boolean;
}

export const Input = (props: InputProps) => {
  const {
    sizes = 'medium',
    beforeIcon,
    label,
    onClear,
    showClear = false,
    helperText,
    error = false,
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="label-medium text-on-surface-1">{label}</label>
      )}
      <div className={containerInputTv({ sizes, error })}>
        <div className="text-text-400 flex h-full !max-w-[16px] items-center">
          {beforeIcon}
        </div>
        <input
          ref={inputRef}
          type="text"
          className={inputSize({
            sizes,
          })}
          {...rest}
        />
        <button
          onClick={() => {
            onClear?.();
            if (inputRef.current) {
              inputRef.current.value = '';
            }
          }}
          hidden={!showClear}
          type="button"
          className="text-text-400 flex h-full cursor-pointer items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        >
          <CloseOutline width={16} height={16} />
        </button>
      </div>
      {helperText && (
        <p className={helperTextTv({ error })}>
          <AlertCircle width={12} height={12} /> {helperText}
        </p>
      )}
    </div>
  );
};

const containerInputTv = tv({
  base: [
    'group',
    'relative',
    'flex',
    'h-12',
    'gap-2',
    '!rounded-[8px]',
    'border-1',
    'border-text-300',
    'body-medium-regular',
    'px-4',
    'font-semibold',
    'hover:border-primary-1',
    'active:border-primary-1',
    'focus:border-primary-1',
    'transition-colors',
  ],
  variants: {
    sizes: {
      large: [],
      medium: ['h-11'],
      small: ['h-10'],
      xSmall: ['h-9'],
    },
    error: {
      true: ['border-error', 'hover:border-error/60'],
    },
  },
  defaultVariants: {},
});

const inputSize = tv({
  base: [
    'placeholder:text-text-400',
    'w-full',
    'outline-none',
    'body-medium-regular',
    '!text-on-surface-1',
  ],
  variants: {
    sizes: {
      large: [],
      medium: [],
      small: [],
      xSmall: [],
    },
  },
  defaultVariants: {},
});

const helperTextTv = tv({
  base: ['body-small', 'flex', 'items-center', 'gap-1', 'text-on-surface-1'],
  variants: {
    error: {
      true: ['text-error'],
    },
  },
});
