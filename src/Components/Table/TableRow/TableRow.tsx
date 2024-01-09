import { FC } from "react";
import { Story } from "../../../types/story";
import "./TableRow.scss";
import StoryPages from "../../StoryPages/StoryPages";
import Badge from "../../Badge/Badge";


interface TableRowProps {
  story: Story;
}

const TableRow: FC<TableRowProps> = ({ story }) => {
  return (
    <div className="table-row">
      <div className="table-row-title">
        <span className="table-row-title-label">{story.title}</span>
        <span className="table-row-title-date">({story.liveFrom || "no date yet"})</span>
      </div>
      <div className="table-row-pages">
          <StoryPages pages={story.pages}/>
      </div>
      <div className="table-row-date">
        <span>{story.lastModified}</span>
      </div>
      <div className="table-row-status"><Badge type={story.status} /></div>
      <div className="table-row-date">
        <span>{story.liveFrom}</span>
      </div>
      <div className="table-row-date">
        <span>{story.endDate}</span>
      </div>
      <div className="table-row-buttons"></div>
    </div>
  );
};

export default TableRow;
