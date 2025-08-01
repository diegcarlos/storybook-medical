import React from 'react';
import { tv } from 'tailwind-variants';

interface ModalContentProps {
  className?: string;
  children?: React.ReactNode;
}

const contentTv = tv({
  base: '',
});

export const ModalContent: React.FC<ModalContentProps> = ({
  className = '',
  children,
}) => {
  return <div className={contentTv({ className })}>{children}</div>;
};
