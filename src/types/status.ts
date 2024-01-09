export enum Status {
  ALL = "ALL",
  DRAFT = "DRAFT",
  SCHEDULED = "SCHEDULED",
  LIVE = "LIVE",
  PAST = "PAST",
}

export const StatusList = [
  { type: Status.ALL, label: "All statuses" },
  { type: Status.DRAFT, label: "Draft" },
  { type: Status.SCHEDULED, label: "Scheduled" },
  { type: Status.LIVE, label: "Live" },
  { type: Status.PAST, label: "Past" },
];
