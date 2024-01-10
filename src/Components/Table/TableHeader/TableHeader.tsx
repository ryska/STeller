import './TableHeader.scss';
import Icon from '../../Icon/Icon';

const TableHeader = () => {
  return (
    <div className="table-header">
      <div className="table-header-title">
        <span>Title</span>
        <Icon name="sort" color="#A3A4AB" />
      </div>
      <div className="table-header-pages">
        <span>Pages</span>
      </div>
      <div className="table-header-date">
        <span>Last Modified</span>
        <Icon name="sort" color="#A3A4AB" />
      </div>
      <div className="table-header-status">
        <span>Status</span>
        <Icon name="sort" color="#A3A4AB" />
      </div>
      <div className="table-header-date">
        {' '}
        <span>Live from</span>
        <Icon name="sort" color="#A3A4AB" />
      </div>
      <div className="table-header-date">
        <span>Ends</span>
        <Icon name="sort" color="#A3A4AB" />
      </div>
      <div className="table-header-buttons"></div>
    </div>
  );
};

export default TableHeader;
