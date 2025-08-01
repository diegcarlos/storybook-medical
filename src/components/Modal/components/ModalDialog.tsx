import React from 'react';
import { tv } from 'tailwind-variants';

interface ModalDialogProps {
  isOpen: boolean;
  onClose?: () => void;
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
}

const dialogTv = tv({
  base: 'flex min-w-197 flex-col gap-6 rounded-3xl bg-white p-12 shadow-[0px_50px_130px_0px_#00000026]',
});

export const ModalDialog = ({
  isOpen,
  className = '',
  children,
  ariaLabel = 'Modal Dialog',
}: ModalDialogProps) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      tabIndex={-1}
      className={dialogTv({ className })}
    >
      {children}
    </div>
  );
};
