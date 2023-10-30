/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
// CSS
import './form-date.css'
// Assets
import icon from '../../assets/icons/table/calendar.png'
import { useEffect } from "react";
import DatePicker, { registerLocale  } from "react-datepicker";
import { useAdminLogic } from '../../utils/admin';
import es from 'date-fns/locale/es';
registerLocale('es', es)

const Icon = () => {
  return (
    <img src={icon} alt='calendar-icon' />
  );
};

export default function FormDate({label, classInputLabel, onDateChange}) {
  const { 
    activeStartingDate, 
    activeClosingDate, 
    activeTrainingDate, 
    handleFieldChange,
    handleActiveDate 
  } = useAdminLogic();

  const handleDateChange = (d) => {
    handleActiveDate(classInputLabel, d);
    handleFieldChange(classInputLabel, d);
    onDateChange(classInputLabel, d);
  };

  useEffect(() =>{
    
  },[    
    activeStartingDate, 
    activeClosingDate, 
    activeTrainingDate])

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
        placeholderText=""
        selected={classInputLabel === 'starting-date' ? activeStartingDate : classInputLabel === 'closing-date' ? activeClosingDate : activeTrainingDate}
        onChange={d => handleDateChange(d)}
        dateFormat="dd/MM/yyyy"
        className='datePicker'
        icon={Icon}
        id={classInputLabel}
      />
    </>
  )
}



   