import PropTypes from 'prop-types'; 
// CSS
import './button.css';

const styles = { 
  disabledButton: { 
    backgroundColor: '#DFE3E8', 
    color: '#919EAB', 
    cursor: 'not-allowed', 
    boxShadow: "0px 0px 10px 0px grey", 
  }, 
  enabledButton: { 
    backgroundColor: '#002855', 
    color: '#FFFFFF', 
    cursor: 'pointer', 
    boxShadow: "0px 0px 10px 0px grey",
  }, 
}

export default function Button({ label, onClick, classButton, disabled }) {

  return (
    <button className={`buttonDefault ${classButton}`} onClick={onClick} alt={`${label}`} disabled={disabled} style={disabled ? styles.disabledButton : styles.enabledButton}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  classButton: PropTypes.string,
  disabled: PropTypes.bool
};