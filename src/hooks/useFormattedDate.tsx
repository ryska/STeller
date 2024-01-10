const formatDateString = (dateString: string): string => {
  if (!dateString) return "--";

  const dateObject = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return dateObject.toLocaleString("en-US", options);
};

export default formatDateString;
