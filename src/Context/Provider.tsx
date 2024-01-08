import { FC, ReactNode, useState } from 'react';
import Context from './Context';

interface Props {
  children: ReactNode;
}

const Provider: FC<Props> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const updateSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <Context.Provider value={{ sidebarOpen, updateSidebarOpen }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;