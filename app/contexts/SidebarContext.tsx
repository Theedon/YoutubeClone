"use client";
import {
  ReactNode,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";

interface SidebarProviderProps {
  children: ReactNode;
}

interface SidebarContextType {
  isSmallOpen: boolean;
  isLargeOpen: boolean;
  toggle: () => void;
  close: () => void;
}

const SidebarContext = createContext<SidebarContextType | null>(null);

export function useSidebarContext() {
  const value = useContext(SidebarContext);
  if (value == null) {
    throw Error("cannot use outside of Sidebar provider");
  }

  return value;
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isLargeOpen, setIsLargeOpen] = useState(true);
  const [isSmallOpen, setIsSmallOpen] = useState(false);

  const isScreenSmall = () => {
    if (window.innerWidth < 1024) return true;
    return false;
  };

  useEffect(() => {
    const handler = () => {
      if (isScreenSmall()) {
        setIsSmallOpen(false);
      }
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  });

  const toggle = () => {
    if (isScreenSmall()) {
      setIsSmallOpen((s) => !s);
    } else {
      setIsLargeOpen((s) => !s);
    }
  };

  const close = () => {
    if (isScreenSmall()) {
      setIsSmallOpen(false);
    } else {
      setIsLargeOpen(false);
    }
  };
  return (
    <SidebarContext.Provider
      value={{ isSmallOpen, isLargeOpen, toggle, close }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
