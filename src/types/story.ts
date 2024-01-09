import { Status } from "./status";

export type Story = {
  id: string;
  title: string;
  pages: Page[];
  lastModified: string;
  status: Status;
  liveFrom?: string;
  endDate?: string;
};

export type Page = {
  id: string;
  url: string;
  order: number;
};
