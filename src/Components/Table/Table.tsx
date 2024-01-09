import "./Table.scss";
import TableRow from "./TableRow/TableRow";
import { Story } from "../../types/story";
import { useFilteredStories } from "../../hooks/useFilteredStories";

const Table = () => {
  const stories = useFilteredStories();

  return (
    <div className="table">
      {stories &&
        stories.map((story: Story) => (
          <TableRow key={story.id} story={story} />
        ))}
    </div>
  );
};
export default Table;
