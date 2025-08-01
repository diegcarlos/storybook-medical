import React from 'react';
import { tv } from 'tailwind-variants';

interface ModalHeaderProps {
  title?: string;
  className?: string;
  children?: React.ReactNode;
  description?: string;
  icon?: React.ReactNode;
}

const containerTv = tv({
  base: 'w-full',
});

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  className = '',
  children,
  description,
  icon,
}) => {
  return (
    <div className={containerTv({ className })}>
      {icon && (
        <div className="bg-primary-1/30 text-primary-1 flex h-15 w-15 items-center justify-center rounded-full">
          {icon}
        </div>
      )}
      <div className="flex flex-col gap-1">
        <span className="title-large">{title}</span>
        <span hidden={!description} className="body-large text-text-500">
          {description}
        </span>
      </div>
      {children}
    </div>
  );
};
