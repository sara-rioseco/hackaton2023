// Hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Libraries
import axios from 'axios';

// Login
export function usePostLogic() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    igcName: "",
    password: "",
    showPassword: false
  });
  const [errorLabel, setErrorLabel] = useState('');

  // Input type change to show/hide password
  const handleFieldChange = (field, event) => {
    if (field === 'igc-name') {
      setFormData({ ...formData, igcName: event.target.value });
    } else if (field === 'password') {
      setFormData({ ...formData, password: event.target.value });
    } 
  };

  // Show/hide password
  const togglePasswordVisibility = () => setFormData({ ...formData, showPassword: !formData.showPassword });

  const getPasswordInputType = () => formData.showPassword ? 'text' : 'password';

  // API login
  const handleLoginClick = async () => {
    try {
      const response = await axios.post('https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/login', {
        email: formData.name,
        password: formData.password,
      });

      // Guardar el accessToken en el localStorage
      if (response.data) {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('userId', response.data.user.id);
        localStorage.setItem('role', response.data.user.role);
      }

      response.data.user.role === 'admin' && navigate('/users');
      response.data.user.role === 'waiter' && navigate('/orders');
      response.data.user.role === 'chef' && navigate('/kitchen');
    } catch (error) {
      if (error.response) {
        if (error.response.data === 'Email and password are required') {
          setErrorLabel('Completa los campos requeridos');
        } else if (error.response.data === 'Cannot find user') {
          setErrorLabel('Usuario no registrado');
        } else if (error.response.data === 'Incorrect password') {
          setErrorLabel('Credenciales  incorrectas');
        } else {
          navigate('/error-page');
        }
      } else {
        navigate('/error-page');
      }
    }
  };

  return {
    formData,
    handleFieldChange,
    errorLabel,
    togglePasswordVisibility,
    getPasswordInputType,
    handleLoginClick,
  }
}