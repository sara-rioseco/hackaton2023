/* eslint-disable react/display-name */
// CSS
import './form-date.css'
// Assets
import icon from '../../assets/icons/table/calendar.png'

import { useState } from "react";

import DatePicker, { registerLocale } from "react-datepicker";
/* import "react-datepicker/dist/react-datepicker.css"; */
import es from 'date-fns/locale/es';
registerLocale('es', es)

const Icon = () => {
  return (
    <img src={icon} alt='calendar-icon' />
  );
};


export default function FormDate() {
  const [date, setDate] = useState(null);

   return (
    <>
      <div className="input-group-prepend">
        <span className="input-group-text">
          <Icon />
        </span>
      </div>
      <DatePicker 
      minDate={new Date()}
      locale="es"
      placeholderText=''
      selected={date}
      onChange={date => setDate(date)}
      dateFormat="dd/MM/yyyy"
      className='datePicker'
      icon={Icon}
      ariaLabelledBy=''
      />
    </>
  )
}



   