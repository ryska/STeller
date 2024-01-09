import { FC, ReactNode, useState } from 'react';
import Context from './Context';
import { Status } from '../types/status';

interface Props {
  children: ReactNode;
}

const Provider: FC<Props> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<Status>(Status.ALL);

  const updateSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  }

  const updateSearchValue = (value: string) => {
    setSearchValue(value);
  }

  const updateSelectedStatus = (status: Status) => {
    setSelectedStatus(status)
  }

  return (
    <Context.Provider value={{ sidebarOpen, updateSidebarOpen, searchValue, updateSearchValue, selectedStatus, updateSelectedStatus }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;