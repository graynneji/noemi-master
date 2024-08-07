"use client";
import { useContext, createContext, useState } from "react";

const FaqContext = createContext();

function FaqProvider({ children }) {
  const [faq, setFaq] = useState(false);

  return (
    <FaqContext.Provider
      value={{
        faq,
        setFaq,
      }}
    >
      {children}
    </FaqContext.Provider>
  );
}

function useFaqs() {
  const context = useContext(FaqContext);
  if (context === undefined)
    throw new Error("FaqContext was used outside the FaqProvider");
  return context;
}
export { FaqProvider, useFaqs };
