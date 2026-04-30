import React, { createContext, useContext, useState, useCallback } from "react";

interface LeadMagnetContextType {
  isOpen: boolean;
  openLeadMagnet: () => void;
  closeLeadMagnet: () => void;
  setOpen: (v: boolean) => void;
}

const LeadMagnetContext = createContext<LeadMagnetContextType>({
  isOpen: false,
  openLeadMagnet: () => {},
  closeLeadMagnet: () => {},
  setOpen: () => {},
});

export const LeadMagnetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openLeadMagnet = useCallback(() => setIsOpen(true), []);
  const closeLeadMagnet = useCallback(() => setIsOpen(false), []);

  return (
    <LeadMagnetContext.Provider value={{ isOpen, openLeadMagnet, closeLeadMagnet, setOpen: setIsOpen }}>
      {children}
    </LeadMagnetContext.Provider>
  );
};

export const useLeadMagnet = () => useContext(LeadMagnetContext);
