import PropTypes from 'prop-types';
import './form-text.css'

export default function FormText({type, placeholder, value, onChange, label, classInputLabel, classInput}) {
  return (
    <>
      {label && <label className={`formTextLabel ${classInputLabel}`}>{label}</label>}
      <input
          type={type}
          className={`formTextInput ${classInput}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
    </>
  );
}

FormText.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  label: PropTypes.string,
  classInputLabel: PropTypes.string,
  classInput: PropTypes.string
}