/* eslint-disable react/display-name */
// CSS
import './form-time.css'
// Assets
import clock from '../../assets/icons/table/clock.png'

import { useState } from "react";

import DatePicker, { registerLocale } from "react-datepicker";
/* import "react-datepicker/dist/react-datepicker.css"; */
import es from 'date-fns/locale/es';
registerLocale('es', es)

const ClockIcon = () => {
  return (
    <img src={clock} alt='clock-icon' />
  );
};


export default function FormTime() {
  const [date, setDate] = useState(null);

   return (
    <>
      <div className="time-input-group-prepend">
        <span className="input-group-text">
          <ClockIcon />
        </span>
      </div>
      <DatePicker 
      showTimeSelect
      showTimeSelectOnly
      minDate={new Date()}
      minTime={800}
      maxTime={1700}
      locale="es"
      placeholderText=''
      selected={date}
      onChange={date => setDate(date)}
      dateFormat="h: aa m"
      className='timePicker'
      ariaLabelledBy=''
      timeIntervals={30}
      />
    </>
  )
}