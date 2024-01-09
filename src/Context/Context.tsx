import { createContext } from 'react';
import { Status } from '../types/status';

export type ContextType = {
  sidebarOpen: boolean;
  searchValue: string;
  selectedStatus: Status;
  updateSidebarOpen: () => void;
  updateSearchValue: (value: string) => void;
  updateSelectedStatus: (status: Status) => void;
}

const Context = createContext<ContextType | null>(null);

export default Context;