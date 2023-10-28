import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useAdminLogic } from "../../utils/admin";

export default function DateFilter( data, startValue, setStartValue, endValue, setEndValue) {

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
        />
        <DatePicker
          label="F. Fin"
          value={endValue}
          format="YYYY-MM-DD"
          onChange={(date) => {
            setEndValue(date)
        }}
        />
        <Button
            variant="contained"
            style={{ padding: 20, width: '100%', height: 30, backgroundColor: "#002855", color: "#ffffff" }} 
            startIcon={<Search />} 
            onClick={filterDataByDate(data, startValue, endValue)}
          >
            Buscar
          </Button>
      </DemoContainer>
      
    </LocalizationProvider>
  );
}
