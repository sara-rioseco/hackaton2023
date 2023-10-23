// CSS
import './login.css'
// Components
import Input from '../../components/input/input'
import Button from '../../components/button/button'
// Assets
import show from '../../assets/icons/login/show-password.png'
import hide from '../../assets/icons/login/hide-password.png'
import { useLoginLogic } from '../../utils/login'

export default function Login() {

  // DESESTRUCTURACIÓN DE HOOK PERSONALIZADO
  const {
    formData,
    handleFieldChange,
    togglePasswordVisibility,
    getPasswordInputType,
    handleLoginClick,
  } = useLoginLogic();

  // RENDERIZADO
  return (
    <>
      <div className='form'>
        <h2 className='title'>Iniciar Sesión</h2>
        <h3 className='subtitle'>Ingresa los datos de tus credenciales.</h3>
        <Input
          type='text'
          placeholder='Ingresa tu usuario'
          value={formData.name}
          onChange={(e) => {
            handleFieldChange('name', e);
          }}
          label='Usuario'
          classInputLabel='labels'
          classInput='inputs'
        />
        <div className='password'>
          <Input
            type={getPasswordInputType()}
            placeholder='Ingresa tu contraseña'
            value={formData.password}
            onChange={(e) => {
              handleFieldChange('password', e)
            }}
            label='Contraseña'
            classInputLabel='labels'
            classInput='inputs passwd'
            classContainer='containerInput'
          />
          <img
            alt='toggle-password-button'
            src={formData.showPassword ? show : hide}
            className="togglePassword"
            onClick={togglePasswordVisibility}
          />
        </div>
        <h3 className='forgotPassword'>Olvidé mi contraseña</h3>
        <Button label="Iniciar Sesión" onClick={handleLoginClick} classButton='loginButton' disabled={!(formData.password && formData.name)}/>
      </div>
    </>
  )
}