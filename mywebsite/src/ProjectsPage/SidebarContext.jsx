import { createContext, useState, useContext } from "react";

// Create context
const SidebarContext = createContext();

// Provider Component
export function SidebarProvider({ children }) {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <SidebarContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SidebarContext.Provider>
  );
}

// Custom hook for easy usage
export function useSidebar() {
  return useContext(SidebarContext);
}