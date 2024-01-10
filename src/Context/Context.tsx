import { createContext } from 'react';
import { Status } from '../types/status';
import { Story } from '../types/story';

export type ContextType = {
  stories: Story[];
  sidebarOpen: boolean;
  searchValue: string;
  selectedStatus: Status;
  updateSidebarOpen: () => void;
  updateSearchValue: (value: string) => void;
  updateSelectedStatus: (status: Status) => void;
  updateStories: (stories: Story[]) => void;
};

const Context = createContext<ContextType | null>(null);

export default Context;
