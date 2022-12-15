import Portal from '@/components/portal';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return;

  return (
    <Portal>
      <button className={'absolute z-10 p-5 top-10 bg-black text-white right-10 rounded-full'} onClick={onClose}>
        Close
      </button>

      <div className={'absolute top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center'}>
        {children}
      </div>
    </Portal>
  );
};

export default Modal;
