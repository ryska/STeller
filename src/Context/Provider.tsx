import { FC, ReactNode, useState } from 'react';
import Context from './Context';
import { Status } from '../types/status';
import { Story } from '../types/story';
import mockData from './../../src/mocks/stories.json';

interface Props {
  children: ReactNode;
}

const Provider: FC<Props> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<Status>(Status.ALL);
  const [stories, setStories] = useState<Story[]>(mockData as Story[]);

  const updateSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const updateSearchValue = (value: string) => {
    setSearchValue(value);
  };

  const updateSelectedStatus = (status: Status) => {
    setSelectedStatus(status);
  };

  const updateStories = (stories: Story[]) => {
    setStories(stories);
  };

  return (
    <Context.Provider
      value={{
        stories,
        updateStories,
        sidebarOpen,
        updateSidebarOpen,
        searchValue,
        updateSearchValue,
        selectedStatus,
        updateSelectedStatus,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
