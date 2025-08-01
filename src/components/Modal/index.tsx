import { ModalContent } from './components/ModalContent';
import { ModalDialog } from './components/ModalDialog';
import { ModalFooter } from './components/ModalFooter';
import { ModalHeader } from './components/ModalHeader';
import { ModalOverlay } from './components/ModalOverlay';

interface ModalProps {
  overlayClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
  dialogClassName?: string;
  footerClassName?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  isOpen: boolean;
  icon?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Modal = (props: ModalProps) => {
  const {
    overlayClassName,
    title,
    description,
    children,
    isOpen,
    headerClassName,
    footerClassName,
    dialogClassName,
    contentClassName,
    footer,
    icon,
  } = props;

  return (
    <ModalOverlay isOpen={isOpen} className={overlayClassName}>
      <ModalDialog isOpen={isOpen} className={dialogClassName}>
        <ModalHeader
          title={title}
          description={description}
          className={headerClassName}
          icon={icon}
        />
        <ModalContent className={contentClassName}>{children}</ModalContent>
        {footer && (
          <ModalFooter className={footerClassName}>{footer}</ModalFooter>
        )}
      </ModalDialog>
    </ModalOverlay>
  );
};
