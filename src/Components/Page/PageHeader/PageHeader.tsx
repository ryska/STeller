import { FC } from "react";

import "./PageHeader.scss";
import Search from "../../Search/Search";
import DropdownSelect from "../../DropdownSelect/DropdownSelect";
import { StatusList } from "../../../types/status";

const PageHeader: FC = () => {
  return (
    <div className="page-header">
      <Search />
      <DropdownSelect options={StatusList} />
      <span className="page-header-info">Showing 1 to 20 of 2137</span>
    </div>
  );
};

export default PageHeader;
