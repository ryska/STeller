import { FC } from "react";
import { Story } from "../../../types/story";
import "./TableRow.scss";
import StoryPages from "../../StoryPages/StoryPages";
import Badge from "../../Badge/Badge";
import Button from "../../Button/Button";
import useFormattedDate from "../../../hooks/useFormattedDate";
import formatMonthDay from "../../../hooks/useFormattedMonthDay";

interface TableRowProps {
  story: Story;
}

const TableRow: FC<TableRowProps> = ({ story }) => {
  return (
    <div className="table-row">
      <div className="table-row-title">
        <span className="table-row-title-label">{story.title}</span>
        <span className="table-row-title-date">
          ({formatMonthDay(story.liveFrom as string) || "No publish date set"})
        </span>
      </div>
      <div className="table-row-pages">
        <StoryPages pages={story.pages} />
      </div>
      <div className="table-row-date">
        <span>{useFormattedDate(story.lastModified as string)}</span>
      </div>
      <div className="table-row-status">
        <Badge type={story.status} />
      </div>
      <div className="table-row-date">
        <span>{useFormattedDate(story.liveFrom as string)}</span>
      </div>
      <div className="table-row-date">
        <span>{useFormattedDate(story.endDate as string)}</span>
      </div>
      <div className="table-row-buttons">
        <Button type="red" onClick={() => {}} icon="bin" />
        <Button type="green" onClick={() => {}} icon="edit" label="Edit" />
      </div>
    </div>
  );
};

export default TableRow;
