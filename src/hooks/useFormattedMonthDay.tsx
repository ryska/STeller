const formatMonthDay = (dateString: string): string => {
  if (!dateString) return "";
  const dateObject = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
  };
  return dateObject.toLocaleString("en-US", options);
};

export default formatMonthDay;
