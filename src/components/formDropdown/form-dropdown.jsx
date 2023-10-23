import PropTypes from 'prop-types';
import './form-dropdown.css'

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

export default function FormDropdown ({ placeholder, /* value, onChange, */ label, classInputLabel }) {
  const getDisplay = () => {
    return placeholder;
  };

  return (
    <>
      {label && <label className={`formDropdownLabel ${classInputLabel}`}>{label}</label>}
      <div className="dropdown-container">
        <div className="formDropdownInput">
          <div className="dropdown-selected-value">{getDisplay()}</div>
          <div className="dropdown-tools">
            <div className="dropdown-tool">
              <Icon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

FormDropdown.propTypes = {
  placeholder: PropTypes.string,
 /*  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func, */
  label: PropTypes.string,
  classInputLabel: PropTypes.string,
  classInput: PropTypes.string
} 



/* FormDropdown({type, placeholder, value, onChange, label, classInputLabel, classInput}) {



  return (
    <>
    <div className='loginInput'>
      {label && <label className={`labelDefault ${classInputLabel}`}>{label}</label>}
      <input
          type={type}
          className={`inputDefault ${classInput}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
    </div>
    </>
  );
}

FormDropdown.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  label: PropTypes.string,
  classInputLabel: PropTypes.string,
  classInput: PropTypes.string
} */