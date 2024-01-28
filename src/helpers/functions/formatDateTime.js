export default function formatDateTime(inputDateTime) {
  console.log(inputDateTime.length)
  if (inputDateTime.length < 5) {
    const date = new Date(inputDateTime);

    console.log(inputDateTime)
    
    const options = { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric', 
      hour12: true 
    };
    
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);
    
    return formattedDate;
  }
  console.log(inputDateTime)

  const [year, month, day, hours, minutes] = inputDateTime;

  // Utwórz obiekt Date z nowym formatem
  const date = new Date(year, month - 1, day, hours, minutes);

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  // Użyj Intl.DateTimeFormat do sformatowania daty
  const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);

  return formattedDate;
  }
  