import { useDisclosure } from "@chakra-ui/react";
import { useContext, createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [allow, setAllow] = useState(false);
  const value = {
    isOpen,
    onToggle,
    onClose,
    allow,
    setAllow,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalAreaContext = () => {
  return useContext(AppContext);
};
