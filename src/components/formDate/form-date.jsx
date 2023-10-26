/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
// CSS
import './form-date.css'
// Assets
import icon from '../../assets/icons/table/calendar.png'

import { useState } from "react";

import DatePicker, { registerLocale  } from "react-datepicker";

import { usePostLogic } from '../../utils/post';

import es from 'date-fns/locale/es';
registerLocale('es', es)

const Icon = () => {
  return (
    <img src={icon} alt='calendar-icon' />
  );
};

export default function FormDate({label, classInputLabel }) {
  const [date, setDate] = useState(null);
  const { activeDate, setActiveDate, handleFieldChange } = usePostLogic();

   return (
    <>
      <div className="input-group-prepend">
      {label && <label className={`formDateLabel ${classInputLabel}`}>{label}</label>}
        <span className="input-group-text">
          <Icon />
        </span>
      </div>
      <DatePicker 
      minDate={new Date()}
      locale="es"
      placeholderText=''
      selected={date}
      onChange={date => {
        setDate(date)
        setActiveDate(new Date(date).toLocaleDateString('es-CL'))
        handleFieldChange({classInputLabel}, date)
        console.log(new Date(date).toLocaleDateString('es-CL'))
      }}
      value={activeDate}
      dateFormat="dd/MM/yyyy"
      className='datePicker'
      icon={Icon}
      id={classInputLabel}
      />
    </>
  )
}



   