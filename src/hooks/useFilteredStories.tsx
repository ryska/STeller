import { useContext } from 'react';
import Context, { ContextType } from '../Context/Context';
import { Status } from '../types/status';
import { Story } from '../types/story';

export const useFilteredStories = () => {
  const { stories, selectedStatus, searchValue } = useContext(
    Context,
  ) as ContextType;

  const filteredStories = stories.filter((story) => {
    const matchesStatus =
      selectedStatus === Status.ALL || story.status === selectedStatus;
    const matchesSearch = story.title
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return filteredStories as Story[];
};
