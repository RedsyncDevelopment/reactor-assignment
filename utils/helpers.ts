export const getFormatedDate = (timestamp: number) => {
  const currentDate = new Date();
  const timestampDate = new Date(timestamp);

  let formatedDate;

  // check if currentDate === timestampDate
  // take currentDate and set (hours, min, seconds, milseconsd) and compere to timestamp date with this values set to 0 as well
  if (currentDate.setHours(0, 0, 0, 0) === timestampDate.setHours(0, 0, 0, 0)) {
    formatedDate = "Today";
  } else {
    const dateCreated = new Date(timestamp).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const dayCreated = new Date(timestamp).toLocaleDateString("en-US", {
      weekday: "long",
    });

    formatedDate = `${dayCreated}, ${dateCreated}.`;
  }

  return formatedDate;
};
