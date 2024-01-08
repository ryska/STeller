import { createContext } from 'react';

export type ContextType = {
  sidebarOpen: boolean;
  updateSidebarOpen: () => void;
}

const Context = createContext<ContextType | null>(null);

export default Context;