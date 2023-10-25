/* eslint-disable react/display-name */
// CSS
import './form-time.css'
// Assets
import clock from '../../assets/icons/table/clock.png'

import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
/* import "react-datepicker/dist/react-datepicker.css"; */
import es from 'date-fns/locale/es';
registerLocale('es', es)

const ClockIcon = () => {
  return (
    <img src={clock} alt='clock-icon' className='clockIcon'/>
  );
};


export default function FormTime() {
  const [date, setDate] = useState(null);

   return (
    <>
      <div className="time-input-group-prepend">
        <span className="time-input-group-text">
          <ClockIcon />
        </span>
      </div>
      <DatePicker 
      showTimeSelect
      showTimeSelectOnly
      minDate={new Date()}
      placeholderText=''
      selected={date}
      locale= 'es'
      onChange={date => setDate(date)}
      dateFormat="hh:aa"
      className='timePicker'
      ariaLabelledBy=''
      timeIntervals={60}
      timeCaption="Hora"
      timeFormat="p"
      minTime={setHours(setMinutes(new Date(), 0), 8)}
      maxTime={setHours(setMinutes(new Date(), 30), 20)}
      />
    </>
  )
}