export default function formatDateTime(inputDateTime) {
  if (inputDateTime.length < 5) {
    console.log(inputDateTime);

    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
      date
    );

    return formattedDate;
  }

  const [year, month, day, hours, minutes] = inputDateTime;

  const date = new Date(year, month - 1, day, hours, minutes);

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(date);

  return formattedDate;
}
