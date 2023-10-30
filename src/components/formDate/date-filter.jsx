/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useAdminLogic } from "../../utils/admin";
import dayjs from 'dayjs';

export default function DateFilter( { setDataFilteredByDate, setApplicantsFilteredByDate, data, processList } ) {
  const [startValue, setStartValue] = useState(dayjs(new Date())); 
  const [endValue, setEndValue] = useState(dayjs('2023-12-31'));
  const { filterDataByDate } = useAdminLogic();

  return (

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker 
          label="F. Inicio" 
          defaultValue={new Date()} 
          format="YYYY-MM-DD"
          onChange={(date) => {
            setStartValue(date)
          }}
          value={startValue}
          style={{ width: '160px', height: '40px' }}
        />
        <DatePicker
          label="F. Fin"
          value={endValue}
          format="YYYY-MM-DD"
          onChange={(date) => {
            setEndValue(date)
          }}
          style={{ width: '160px', height: '40px' }}
        />
       <Button
         variant="contained"
         style={{
           padding: 20,
           width: 140,
           height: 40,
           backgroundColor: "#002855",
           color: "#ffffff"
         }} 
         startIcon={<Search />} 
         onClick={() => {
           const response = filterDataByDate(data, startValue.$d, endValue.$d);
           console.log(response)
           processList ? setDataFilteredByDate(response) : setApplicantsFilteredByDate(response)
         }}
       >
         Buscar
       </Button>
      </DemoContainer>
    </LocalizationProvider>
  );
}
