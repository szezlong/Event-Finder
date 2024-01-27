export default function formatDateTime(inputDateTime) {
    const date = new Date(inputDateTime);
    
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
  