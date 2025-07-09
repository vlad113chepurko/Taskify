import { create } from 'zustand';

type ModalState = {
  visible: boolean;
  message: string;
  setModal: (message: string, visible: boolean) => void;
};

const useModalStore =
  create<ModalState>((set) => ({
    visible: false,
    message: '',
    setModal: (message: string, visible: boolean) => set({
      visible,
      message,
    })
  }))

export default useModalStore;