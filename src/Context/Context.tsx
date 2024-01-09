import { createContext } from 'react';

export type ContextType = {
  sidebarOpen: boolean;
  searchValue: string;
  updateSidebarOpen: () => void;
  updateSearchValue: (value: string) => void;
}

const Context = createContext<ContextType | null>(null);

export default Context;