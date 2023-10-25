/* eslint-disable no-unused-vars */
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
  const handleSideBarButtonClick = async (type) => {
    if (type) {
      if (type === "Convocatorias") {
        navigate('/post');
      }
      if (type === "Postulantes") {
        navigate('/applicants');
      }
      if (type === "Procesos") {
        navigate('/processes');
      }
    } else {
      navigate('/error-page');
    }
  };

  return {
    formData,
    handleFieldChange,
    errorLabel,
    togglePasswordVisibility,
    getPasswordInputType,
    handleSideBarButtonClick,
  }
}