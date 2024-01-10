import "./Table.scss";
import TableRow from "./TableRow/TableRow";
import { Story } from "../../types/story";
import { useFilteredStories } from "../../hooks/useFilteredStories";
import TableHeader from "./TableHeader/TableHeader";
import Pagination from "../Pagination/Pagination";
import { memo } from "react";

const Table = () => {
  const stories = useFilteredStories();

  return (
    <>
      <div className="table">
        <TableHeader />
        {stories &&
          stories.map((story: Story) => (
            <TableRow key={story.id} story={story} />
          ))}
      </div>
      <Pagination />
    </>
  );
};
export default memo(Table);
