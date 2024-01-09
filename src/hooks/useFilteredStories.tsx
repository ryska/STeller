import { useContext } from "react";
import Context, { ContextType } from "../Context/Context";
import { Status } from "../types/status";
import mockData from "./../../src/mocks/stories.json";
import { Story } from "../types/story";

export const useFilteredStories = () => {
    const { selectedStatus, searchValue } = useContext(Context) as ContextType;

    const filteredStories = mockData.filter((story) => {
      const matchesStatus = selectedStatus === Status.ALL || story.status === selectedStatus;
      const matchesSearch = story.title.toLowerCase().includes(searchValue.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  
    return filteredStories as Story[];
  };