import { FC } from 'react';
import './StoryPages.scss';
import { Page } from '../../types/story';

interface StoryPagesProps {
  pages: Page[];
}

const StoryPages: FC<StoryPagesProps> = ({ pages }) => {
  const visiblePages = pages.slice(0, 6);
  return (
    <div className="story-pages">
      {visiblePages.map((page, idx) => (
        <div key={idx} className="story-page">
          <a href={page.url} target="_blank">
            <img src={page.url} alt="story page" />
          </a>
        </div>
      ))}
      {pages.length > 6 && (
        <div className="story-page more">
          <span>+7</span>
        </div>
      )}
    </div>
  );
};
export default StoryPages;
