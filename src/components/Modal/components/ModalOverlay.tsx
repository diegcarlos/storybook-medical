import { AnimatePresence, motion } from 'framer-motion';
import { tv } from 'tailwind-variants';

interface ModalOverlayProps {
  isOpen: boolean;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const containerTv = tv({
  base: 'pointer-events-none fixed inset-0 z-40 flex h-full w-full items-center justify-center',
});

const blurTv = tv({
  base: 'pointer-events-auto absolute inset-0 h-full w-full bg-black/10 backdrop-blur-sm transition-opacity',
});

export const ModalOverlay = (props: ModalOverlayProps) => {
  const { isOpen, onClick, className = '', children } = props;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={containerTv({ className })}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={blurTv()} onClick={onClick} aria-hidden="true" />
          <motion.div
            className="pointer-events-auto relative z-10"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              duration: 0.25,
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
