import React from 'react';
import { tv } from 'tailwind-variants';

interface ModalFooterProps {
  className?: string;
  children?: React.ReactNode;
}

const footerTv = tv({
  base: 'flex w-full justify-end gap-4 pt-8',
});

export const ModalFooter: React.FC<ModalFooterProps> = ({
  className = '',
  children,
}) => {
  return <div className={footerTv({ className })}>{children}</div>;
};
