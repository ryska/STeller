import "./Pagination.scss";
import Input from "../Input/Input";
import DropdownSelect from "../DropdownSelect/DropdownSelect";
import { paginationOptions } from "./options";
import ArrowNavigation from "../ArrowNavigation/ArrowNavigation";

const Pagination = () => {
  return (
    <div className="pagination">
      Page
      <Input value={1} onChange={() => {}} />
      of 1
      <div className="pagination-dropdown-wrapper">
        <DropdownSelect options={paginationOptions} />
      </div>
      <div className="pagination-nav-wrapper">
        <ArrowNavigation onNextClick={() => {}} onPrevClick={() => {}} />
      </div>
    </div>
  );
};

export default Pagination;
