import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const handleChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="calendar-container" style={containerStyle}>
      <Calendar onChange={handleChange} value={date} />
    </div>
  );
};

// Optional inline styles
const containerStyle = {
  maxWidth: '300px',
  margin: '2rem auto',
  padding: '1rem',
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

export default CalendarComponent;
