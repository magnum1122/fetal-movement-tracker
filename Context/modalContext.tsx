import { createContext, ReactNode, useContext, useState } from "react";

type ModalContextType = {
  modalVisible: boolean;
  toggleModal: () => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <ModalContext.Provider value={{ modalVisible, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useCounter must be used inside CounterProvider");
  }
  return context;
};
