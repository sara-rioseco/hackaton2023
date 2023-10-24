import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from '@mui/material';
import { Search } from '@mui/icons-material';

export default function DatePickerValue() {
  const [value, setValue] = React.useState(dayjs('2023-09-28'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker label="F. Inicio" defaultValue={dayjs('2023-09-28')} />
        <DatePicker
          label="F. Fin"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
        <Button
            variant="contained"
            style={{ backgroundColor: "#002855", color: "#ffffff" }} 
            startIcon={<Search />} 
          >
            Buscar
          </Button>
      </DemoContainer>
      
    </LocalizationProvider>
  );
}
