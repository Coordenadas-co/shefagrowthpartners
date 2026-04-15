import React, { createContext, useContext, useState, useCallback } from "react";
import BookingModal from "@/components/BookingModal";

interface BookingContextType {
  openBooking: () => void;
}

const BookingContext = createContext<BookingContextType>({ openBooking: () => {} });

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openBooking = useCallback(() => setIsOpen(true), []);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <BookingModal open={isOpen} onOpenChange={setIsOpen} />
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
