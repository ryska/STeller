import { FC, ReactNode, useState } from 'react';
import Context from './Context';

interface Props {
  children: ReactNode;
}

const Provider: FC<Props> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const updateSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  }

  const updateSearchValue = (value: string) => {
    setSearchValue(value);
  }

  return (
    <Context.Provider value={{ sidebarOpen, updateSidebarOpen, searchValue, updateSearchValue }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;