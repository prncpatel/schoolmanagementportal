import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import  CalendarComponent  from './CalenderComponents/Calender';

function DashboardCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <CalendarComponent  />
    </LocalizationProvider>
  )
}

export default DashboardCalendar