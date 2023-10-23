// CSS
import './processes.css'
// Components
import Input from '../../components/input/input'
import Button from '../../components/button/button'
// Assets
import show from '../../assets/icons/login/show-password.png'
import hide from '../../assets/icons/login/hide-password.png'
// Custom hook
import { useLoginLogic } from '../../utils/processes'

export default function Processes() {

  // DESESTRUCTURACIÓN DE HOOK PERSONALIZADO
  const {
    formData,
    handleFieldChange,
    errorLabel,
    togglePasswordVisibility,
    getPasswordInputType,
    handleLoginClick,
  } = useLoginLogic();

  // RENDERIZADO
  return (
    <>
      <div className='login'>
        <div className='form'>
          <h2 className='title'>INICIAR SESIÓN</h2>
          <div className='line'></div>
          <Input
            type='text'
            placeholder='Escribe aquí'
            value={formData.name}
            onChange={(e) => handleFieldChange('name', e)}
            label='NOMBRE:'
            classInputLabel='labels'
            classInput='inputs'
          />
          <div className='password'>
            <Input
              type={getPasswordInputType()}
              placeholder='*************'
              value={formData.password}
              onChange={(e) => handleFieldChange('password', e)}
              label='CONTRASEÑA:'
              classInputLabel='labels'
              classInput='inputs passwd'
              classContainer='containerInput'
            />
            <img
              alt='toggle-password-button'
              src={formData.showPassword ? hide : show}
              className="togglePassword"
              onClick={togglePasswordVisibility}
            />
          </div>
          <label className='labelErrorLogin'>{errorLabel}</label>
          <Button label="ENTRAR" onClick={handleLoginClick} classButton='buttonEnter' />
        </div>
      </div>
    </>
  )
}