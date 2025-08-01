import { useState } from 'react';
import { tv } from 'tailwind-variants';

export interface SegmentedProps {
  className?: string;
  options?: {
    id: string;
    label: string;
  }[];
  onChange?: (value: string) => void;
  value?: string;
  defaultSelected?: string;
}

const containerTv = tv({
  base: 'body-large-bold group flex min-h-9.5 overflow-hidden rounded-[50px]',
});

const optionTv = tv({
  base: [
    'text-white',
    'data-[selected=true]:bg-primary-1',
    'data-[selected=false]:bg-primary-1/10',
    'data-[selected=false]:text-primary-1',
    'data-[selected=false]:hover:bg-primary-1/20',
    'flex',
    'h-9.5',
    'w-full',
    'cursor-pointer',
    'items-center',
    'justify-center',
    'transition-colors',
    'duration-500',
    'inset-0',
    'select-none',
  ],
});

export const Segmented = (props: SegmentedProps) => {
  const { className, options = [], onChange, value, defaultSelected } = props;
  const [selected, setSelected] = useState<string | undefined>(defaultSelected);

  return (
    <div className={containerTv({ className })}>
      {options?.map((option) => (
        <div
          data-selected={selected === option.id}
          className={optionTv({})}
          key={option.id}
          onClick={() => {
            setSelected(option.id);
            onChange?.(option.id);
          }}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};
