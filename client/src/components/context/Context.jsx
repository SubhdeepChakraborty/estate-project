import { useDisclosure } from "@chakra-ui/react";
import { useContext, createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [allow, setAllow] = useState(true);
  useEffect(() => {
    let status = localStorage.getItem("email");
    console.log(status);
    if (status) {
      setAllow(!true);
    } else {
      setAllow(true);
    }
  }, [allow]);
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
