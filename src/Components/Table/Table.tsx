import "./Table.scss";
import TableRow from "./TableRow/TableRow";
import mockData from "./../../mocks/stories.json";
import { Story } from "../../types/story";

const Table = () => {
  const stories = mockData as Story[];
  return (
    <div className="table">
      {stories && stories.map((story: Story) => 
        <TableRow key={story.id} story={story} />
      )}
    </div>
  );
};
export default Table;
