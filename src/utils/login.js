// Hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Libraries
import axios from 'axios';
// Login
export function useLoginLogic() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    password: "",
    showPassword: false
  });

  const [errorLabel, setErrorLabel] = useState('');

  const handleFieldChange = (field, event) => {
    if (field === 'name') {
      setFormData({ ...formData, name: event.target.value });
    } else if (field === 'password') {
      setFormData({ ...formData, password: event.target.value });
    }
  };

  // Show/hide password
  const togglePasswordVisibility = () => setFormData({ ...formData, showPassword: !formData.showPassword });

  const getPasswordInputType = () => formData.showPassword ? 'text' : 'password';

  const handleLogin = async (user, pass) => {
    try {
      const res = await axios.post('https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/login', {
        username: user,
        password: pass,
      });
      return res.data.data
    } catch (error) {
      if (error.response) {
        if (error.response.data === "Incorrect username or password.") {
          console.error(error.response.data);
          setErrorLabel('Las credenciales ingresadas son incorrectas');
        } else if (error.response.data === "Missing required parameter USERNAME") {
          console.error(error.response.data);
          setErrorLabel('Debes ingresar un usuario');
        } else if (error.response.data === "Missing required parameter PASSWORD") {
          console.error(error.response.data);
          setErrorLabel('Debes ingresar una contraseña');
        } else {
          console.error(error.response.data);
          navigate('/');
        }
      } else {
        console.error(error)
        navigate('/');
      }
    }
  };

  const handleLoginClick = async () => {
    try {
      const data = await handleLogin(formData.name, formData.password)

      if (data) {
        localStorage.setItem('AccessToken', data.AuthenticationResult.AccessToken);
        localStorage.setItem('RefreshToken', data.AuthenticationResult.RefreshToken);
        localStorage.setItem('IdToken', data.AuthenticationResult.IdToken);
        localStorage.setItem('role', data.Userdata.role);
        localStorage.setItem('name', data.Userdata.name);
        localStorage.setItem('lastname', data.Userdata.lastname);
        data.Userdata.role === 'Admin' && navigate('/admin');
      }
    } catch (error) {
      console.error(error)
      navigate('/');
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