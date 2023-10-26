/* eslint-disable no-unused-vars */
// Hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Libraries
import axios from 'axios';

// Login

export function usePostLogic() {
  const navigate = useNavigate();
  const [errorLabel, setErrorLabel] = useState('');
  const [notValidForm, setNotValidForm] = useState(true);

  const [formData, setFormData] = useState({
    processName: "",
    startingDate: "",
    closingDate: "",
    profileName: "",
    account: "",
    status: "",
    trainer: "",
    trainingSchedule: {},
    trainingModality: "",
    processModality: "",
    processSchedule: {},
    workSchedule: "",
    reason: "",
    applicantsNumber: 0,
    reducerNumber: 0,
    businessName: "",
    campus: {
        name: "",
        address: ""
    },
    service: "",
    turn: ""
  });

  // Input type change to show/hide password
  const handleFieldChange = (field, event) => {
    if (field === 'igc-name') {
      setFormData({ ...formData, processName: event.target.value });
      console.log(event.target.value)
    } 
    if (field === 'starting-date') {
      setFormData({ ...formData, startingDate: event.value });
      console.log(event.value)
    }
    if (field === 'closing-date') {
      setFormData({ ...formData, closingDate: event.value });
      console.log(event.value)
    } 
    if (field === 'profile-name') {
      setFormData({ ...formData, profileName: event.value });
      console.log('Seleccionaste tipo de perfil ', event.value)
    } 
    if (field === 'account') {
      setFormData({ ...formData, account: event.value });
      console.log(event.value)
    } 
    if (field === 'status') {
      setFormData({ ...formData, status: event.value });
      console.log(event.value)
    } 
    if (field === 'trainer') {
      setFormData({ ...formData, trainer: event.value });
      console.log(event.value)
    } 
    if (field === 'training-schedule') {
      setFormData({ ...formData, trainingSchedule: event.value });
      console.log(event.value)
    } 
    if (field === 'training-modality') {
      setFormData({ ...formData, trainingModality: event.value });
      console.log(event.value)
    } 
    if (field === 'process-modality') {
      setFormData({ ...formData, processModality: event.value });
      console.log(event.value)
    } 
    if (field === 'process-schedule') {
      setFormData({ ...formData, processSchedule: event.value });
      console.log(event.value)
    } 
    if (field === 'work-schedule') {
      setFormData({ ...formData, workSchedule: event.value });
      console.log('Seleccionaste tipo de trabajo ', event.value)
    } 
    if (field === 'reason') {
      setFormData({ ...formData, reason: event.value });
      console.log(event.value)
    } 
    if (field === 'applicants-number') {
      setFormData({ ...formData, applicantsNumber: event.target.value });
      console.log(event.target.value)
    } 
    if (field === 'reducer-number') {
      setFormData({ ...formData, reducerNumber: event.target.value });
      console.log(event.target.value)
    } 
    if (field === 'business-name') {
      setFormData({ ...formData, businessName: event.value });
      console.log(event.value)
    } 
    if (field === 'campus-name') {
      setFormData({ ...formData, campus: { name:event.value } });
      console.log(event.value)
    }
    if (field === 'campus-address') {
      setFormData({ ...formData, campus: { address:event.value } });
      console.log(event.value)
    } 
    if (field === 'service') {
      setFormData({ ...formData, service: event.value });
      console.log(event.value)
    } 
    if (field === 'turn') {
      setFormData({ ...formData, turn: event.value });
      console.log(event.value)
    } 
  };

  const handleSideBarButtonClick = (type) => {
    if (type) {
      if (type === "Convocatorias") {
        navigate('/post');
      }
      if (type === "Postulantes") {
        navigate('/applicants');
      }
      if (type === "Procesos") {
        navigate('/listprocesses');
      }
    } else {
      navigate('/error-page');
    }
  };

  const handleCreateProcessButtonClick = async () => {

  }

  return {
    notValidForm, 
    setNotValidForm,
    formData,
    setFormData,
    handleFieldChange,
    errorLabel,
    setErrorLabel,
    handleSideBarButtonClick,
    handleCreateProcessButtonClick,
  }
}