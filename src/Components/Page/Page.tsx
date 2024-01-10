import { FC, useContext } from 'react';

import './Page.scss';
import PageHeader from './PageHeader/PageHeader';
import Table from '../Table/Table';
import Button from '../Button/Button';
import Context, { ContextType } from '../../Context/Context';

const Page: FC = () => {
  const { sidebarOpen } = useContext(Context) as ContextType;

  return (
    <div className={`page ${sidebarOpen && 'shade'}`}>
      <div className="page-wrapper">
        <h1 className="page-heading">Stories</h1>
        <div className="page-button-wrapper">
          <Button
            icon="add"
            label="New story"
            type="green"
            onClick={() => {}}
          />
        </div>
      </div>

      <PageHeader />
      <Table />
    </div>
  );
};

export default Page;
