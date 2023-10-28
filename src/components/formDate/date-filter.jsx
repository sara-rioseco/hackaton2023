import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from '@mui/material';
import { Search } from '@mui/icons-material';

export default function DatePickerValue() {
  const [startValue, setStartValue] = React.useState(dayjs('2023-09-28'));
  const [endValue, setEndValue] = React.useState(dayjs('2023-12-31'));
  return (

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker 
          label="F. Inicio" 
          defaultValue={dayjs('2023-09-28')} 
          format="YYYY-MM-DD"
          onChange={(date) => {
            setStartValue(date)
            console.log(date)
          }}
          value={endValue}
        />
        <DatePicker
          label="F. Fin"
          value={startValue}
          format="YYYY-MM-DD"
          onChange={(date) => {
          setEndValue(date)
          console.log(date)
        }}
        />
        <Button
            variant="contained"
            style={{ padding: 20, width: '100%', height: 30, backgroundColor: "#002855", color: "#ffffff" }} 
            startIcon={<Search />} 
          >
            Buscar
          </Button>
      </DemoContainer>
      
    </LocalizationProvider>
  );
}
