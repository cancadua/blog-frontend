import Portal from '@/components/portal';
import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen])

  if (!isOpen) return;

  return (
    <Portal>
      <button className={'fixed z-10 p-5 top-10 right-10 bg-black text-white rounded-full'} onClick={onClose}>
        Close
      </button>

      <div className={'fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center'}>
        <div className={'wrapper text-black !p-10'}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
