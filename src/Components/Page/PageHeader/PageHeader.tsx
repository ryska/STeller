import { FC } from "react";

import "./PageHeader.scss";
import Search from "../../Search/Search";

const PageHeader: FC = () => {
  return (
    <div className="page-header">
        <Search />
    </div>
  );
};

export default PageHeader;
