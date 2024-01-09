import { FC } from "react";
import "./StoryPages.scss";
import { Page } from "../../types/story";

interface StoryPagesProps {
  pages: Page[];
}

const StoryPages: FC<StoryPagesProps> = ({ pages }) => {
  return (
    <div className="story-pages">
      {pages.map((page) => (
        <div className="story-page">
          <a href={page.url} target="_blank">
          <img src={page.url} alt="story page" />
          </a>
        </div>
      ))}
    </div>
  );
};
export default StoryPages;
