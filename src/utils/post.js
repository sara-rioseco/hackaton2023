/* eslint-disable no-unused-vars */
// Hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Libraries
import axios from 'axios';

// Login
export function usePostLogic() {
  const navigate = useNavigate();
  const types = ["Convocatorias", "Postulantes", "Procesos"];
  const [ activeType, setActiveType ] = useState(types[0]);
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
      setFormData({ ...formData, processNameName: event.target.value });
    } 
    if (field === 'starting-date') {
      setFormData({ ...formData, startingDate: event.target.value });
    }
    if (field === 'closing-date') {
      setFormData({ ...formData, closingDate: event.target.value });
    } 
    if (field === 'profile-name') {
      setFormData({ ...formData, profileName: event.target.value });
    } 
    if (field === 'account') {
      setFormData({ ...formData, account: event.target.value });
    } 
    if (field === 'status') {
      setFormData({ ...formData, status: event.target.value });
    } 
    if (field === 'trainer') {
      setFormData({ ...formData, trainer: event.target.value });
    } 
    if (field === 'training-schedule') {
      setFormData({ ...formData, trainingSchedule: event.target.value });
    } 
    if (field === 'training-modality') {
      setFormData({ ...formData, trainingModality: event.target.value });
    } 
    if (field === 'process-modality') {
      setFormData({ ...formData, processModality: event.target.value });
    } 
    if (field === 'process-schedule') {
      setFormData({ ...formData, processSchedule: event.target.value });
    } 
    if (field === 'work-schedule') {
      setFormData({ ...formData, workSchedule: event.target.value });
    } 
    if (field === 'reason') {
      setFormData({ ...formData, reason: event.target.value });
    } 
    if (field === 'applicants-number') {
      setFormData({ ...formData, applicantsNumber: event.target.value });
    } 
    if (field === 'reducer-number') {
      setFormData({ ...formData, reducerNumber: event.target.value });
    } 
    if (field === 'business-name') {
      setFormData({ ...formData, businessName: event.target.value });
    } 
    if (field === 'campus-name') {
      setFormData({ ...formData, campus: { name:event.target.value } });
    }
    if (field === 'campus-address') {
      setFormData({ ...formData, campus: { address:event.target.value } });
    } 
    if (field === 'service') {
      setFormData({ ...formData, service: event.target.value });
    } 
    if (field === 'turn') {
      setFormData({ ...formData, turn: event.target.value });
    } 
  };

  const handleSideBarButtonClick = async (type, setActiveType) => {
    if (type) {
      if (type === "Convocatorias") {
        setActiveType("Convocatorias")
        navigate('/post');
      }
      if (type === "Postulantes") {
        setActiveType("Postulantes")
        navigate('/applicants');
      }
      if (type === "Procesos") {
        setActiveType("Procesos")
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