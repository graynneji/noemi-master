"use client";
import { createContext, useContext, useEffect, useState } from "react";

const NavMenuContext = createContext();

function NavMenuProvider({ children }) {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <NavMenuContext.Provider
      value={{
        open,
        // setOpen,
        toggleMenu,
      }}
    >
      {children}
    </NavMenuContext.Provider>
  );
}

function useNavMenu() {
  const context = useContext(NavMenuContext);
  console.log(context);
  if (context === undefined)
    throw new Error("NavMenuContext was used outside the NavMenuProvider");
  return context;
}
export { NavMenuProvider, useNavMenu };
