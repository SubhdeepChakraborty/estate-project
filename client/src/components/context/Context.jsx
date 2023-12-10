import { useDisclosure } from "@chakra-ui/react";
import { useContext, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const value = {
    isOpen,
    onToggle,
    onClose,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalAreaContext = () => {
  return useContext(AppContext);
};
