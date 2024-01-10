import { FC, useContext } from 'react';

import './PageHeader.scss';
import Search from '../../Search/Search';
import DropdownSelect from '../../DropdownSelect/DropdownSelect';
import { StatusList } from '../../../types/status';
import Context, { ContextType } from '../../../Context/Context';
import Button from '../../Button/Button';

const PageHeader: FC = () => {
  const { stories } = useContext(Context) as ContextType;

  return (
    <div className="page-header">
      <Search />
      <DropdownSelect options={StatusList} />
      <span className="page-header-info">
        Showing 1 to {stories.length} of {stories.length}
      </span>
      <div className="page-header-button">
        <Button icon="add" label="New story" type="green" onClick={() => {}} />
      </div>
    </div>
  );
};

export default PageHeader;
