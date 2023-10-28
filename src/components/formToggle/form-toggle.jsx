import PropTypes from 'prop-types';
import './form-toggle.css'

export default function FormToggle ({ label }) { 
  return ( 
    <div className="toggle-container"> 
      <div className="toggle-switch"> 
        <input type="checkbox" className="checkbox" 
               name={label} id={label} /> 
        <label className="label" htmlFor={label}> 
          <span className="inner" /> 
          <span className="switch" /> 
        </label> 
      </div> 
      <div className="toggle-text">{" "}{label}</div>
    </div> 
  ); 
}

FormToggle.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  classInputLabel: PropTypes.string,
  classInput: PropTypes.string
}