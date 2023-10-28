/* eslint-disable no-unused-vars */
// Hooks
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Libraries
import axios from 'axios';
import dayjs from 'dayjs';
// Login

export function useAdminLogic() {
  const navigate = useNavigate();
  const [startValue, setStartValue] = useState(dayjs(new Date()));
  const [endValue, setEndValue] = useState(dayjs('2023-12-31'));
  const [errorLabel, setErrorLabel] = useState('');
  const [notValidForm, setNotValidForm] = useState(true);
  const [iaOfferDataResponse, setIaOfferDataResponse ] = useState(null);
  const [activeStartingDate, setActiveStartingDate] = useState(new Date())
  const [activeClosingDate, setActiveClosingDate] = useState(new Date(new Date().getTime()+(7*24*60*60*1000)))
  const [activeTrainingDate, setActiveTrainingDate] = useState(new Date(new Date().getTime()+(10*24*60*60*1000)))
  const [formData, setFormData] = useState({
    processName: "",
    startingDate: (new Date()).toISOString().split('T')[0],
    closingDate: (new Date(new Date().getTime()+(7*24*60*60*1000))).toISOString().split('T')[0],
    profileName: "",
    id: "18be2ed9-232d-48fd-8271-b8c5242a94e9",
    account: "",
    status: "OPEN",
    trainer: "",
    trainingSchedule: {
      trainingDateStart: (new Date(new Date().getTime()+(10*24*60*60*1000))).toISOString().split('T')[0],
      trainingHourStart: "08:00",
      trainingHourEnd: "17:00",
      trainingWeekendDay: "",
      trainingWeekendDayTimeStart: "08:00",
      trainingWeekendDayTimeEnd: "17:00"
    },
    trainingModality: "",
    processModality: "",
    processSchedule: {
      processWorkingHoursStart: "08:00",
      processWorkingHoursEnd: "17:00",
      processWeekendDay: "",
      processWeekendDayTimeStart: "08:00",
      processWeekendDayTimeEnd: "17:00",
    },
    suitables: 0,
    reason: "",
    applicantsNumber: 0,
    reducerNumber: 0,
    campus: {
        name: "",
        address: ""
    },
    service: "",
    turn: ""
  });

  const [ offerData, setOfferData ] = useState({
    title: "",
    campus: "",
    content: "Contenido de la oferta",
    createdDate: new Date().toISOString().split('T')[0],
    status: "published",
    id: "34133a1a-d90d-492d-9d3b-43f6deef1ec5",
    modality: "",
    typeWork: "",
    category: "",
    turn: ""
  });
 const [offerDataForIA, setOfferDataForIA ] = useState(null);
  useEffect (()=> {
    setOfferDataForIA( { question: offerData})
  }, [offerData])

  
  const token = localStorage.getItem('accessToken');
  const userId = localStorage.getItem('userId');
  const role = localStorage.getItem('role');
  
  const handleSideBarButtonClick = (type) => {
    if (type) {
      if (type === "Convocatorias") {
        navigate('/admin');
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

  const handleFieldChange = (field, event) => {
    const newFormData = {...formData, trainingSchedule: {...formData.trainingSchedule}, processSchedule: {...formData.processSchedule}, campus: {...formData.campus}}
    if (field === 'igc-name') {
      setFormData({ ...newFormData, processName: event.target.value });
      setOfferData({...offerData, title: event.target.value})
      console.log(event.target.value)
    } 
    if (field === 'starting-date') {
      const d = event.toISOString().split('T')[0]
      setFormData({ ...newFormData, startingDate: d });
      console.log(`handle field change -> ${d}`);
    }
    if (field === 'closing-date') {
      setFormData({ ...newFormData, closingDate: event});
      console.log('handle field change ->', event.toISOString().split('T')[0]);
    } 
    if (field === 'profile-name') {
      setFormData({ ...newFormData, profileName: event.value });
      setOfferData({...offerData, category: event.value})
      console.log(event.value)
    } 
    if (field === 'account') {
      setFormData({ ...newFormData, account: event.value });
      console.log(event.value)
    } 
    if (field === 'status') {
      setFormData({ ...newFormData, status: event.value });
      console.log(event.value)
    } 
    if (field === 'trainer') {
      setFormData({ ...newFormData, trainer: event.value });
      console.log(event.value)
    } 
    if (field === 'training-time-start') {
      setFormData({ ...newFormData, trainingSchedule: {...newFormData.trainingSchedule, trainingHourStart: event.value }});
      console.log(event.value)
    } 
    if (field === 'training-time-end') {
      setFormData({ ...newFormData, trainingSchedule: {...newFormData.trainingSchedule, trainingHourEnd: event.value }});
      console.log(event.value)
    } 
    if (field === 'training-date') {
      setFormData({ ...newFormData, trainingSchedule: {...newFormData.trainingSchedule, trainingDateStart: event.toISOString().split('T')[0]}});
      console.log('handle field change ->', event.toISOString().split('T')[0]);
    } 
    if (field === 'training-modality') {
      setFormData({ ...newFormData, trainingModality: event.value });
      console.log(event.value)
    } 
    if (field === 'training-weekend-day') {
      setFormData({ ...newFormData, trainingSchedule: {...newFormData.trainingSchedule, trainingWeekendDay: event.value }});
      console.log(event.value)
    } 
    if (field === 'training-weekend-day-time-start') {
      setFormData({ ...newFormData, trainingSchedule: {...newFormData.trainingSchedule, trainingWeekendDayTimeStart: event.value }});
      console.log(event.value)
    } 
    if (field === 'training-weekend-day-time-end') {
      setFormData({ ...newFormData, trainingSchedule: {trainingWeekendDayTimeEnd: event.value }});
      console.log(event.value)
    } 
    if (field === 'process-modality') {
      setFormData({ ...newFormData, processModality: event.value });
      setOfferData({...offerData, modality: event.value})
      setOfferData({...offerData, typeWork: event.value})
      console.log(event.value)
    } 
    if (field === 'process-weekend-day') {
      setFormData({ ...newFormData, processSchedule: {...newFormData.processSchedule, processWeekendDay : event.value} });
      console.log(event.value)
    } 
    if (field === 'process-weekend-day-time-start') {
      setFormData({ ...newFormData, processSchedule: {...newFormData.processSchedule, processWeekendDayTimeStart : event.value} });
      console.log(event.value)
    } 
    if (field === 'process-weekend-day-time-end') {
      setFormData({ ...newFormData, processSchedule: {...newFormData.processSchedule, processWeekendDayTimeEnd : event.value} });
      console.log(event.value)
    } 
    if (field === 'process-time-start') {
      setFormData({ ...newFormData, processSchedule: {...newFormData.processSchedule, processWorkingHoursStart : event.value} });
      console.log(event.value)
    } 
    if (field === 'process-time-end') {
      setFormData({ ...newFormData, processSchedule: {...newFormData.processSchedule, processWorkingHoursEnd : event.value} });
      console.log(event.value)
    } 
    if (field === 'reason') {
      setFormData({ ...newFormData, reason: event.value });
      console.log(event.value)
    } 
    if (field === 'applicants-number') {
      setFormData({ ...newFormData, applicantsNumber: Number(event.target.value) });
      console.log(event.target.value)
    } 
    if (field === 'reducer-number') {
      setFormData({ ...newFormData, reducerNumber: Number(event.target.value) });
      console.log(event.target.value)
    } 
    if (field === 'campus-name') {
      let campusAddress
      if (event.value === 'Lima') {
        campusAddress = 'Av. Nicolás de Piérola 589'
      }
      if (event.value === 'Surquillo') {
        campusAddress = 'Av. Republica de Panamá 4575'
      }
      if (event.value === 'Piura') {
        campusAddress = 'Av. Grau 1460 Manzana A'
      }
      setFormData({ ...newFormData, campus: { ...newFormData.campus,  name: event.value, address: campusAddress } })
      setOfferData({...offerData, campus: event.value})
      console.log(`Sede: ${event.value}, Dirección: ${campusAddress}`)
    } 
    if (field === 'service') {
      setFormData({ ...newFormData, service: event.value });
      console.log(event.value)
    } 
    if (field === 'turn') {
      setFormData({ ...newFormData, turn: event.value });
      setOfferData({...offerData, turn: event.value})
      console.log(event.value)
    } 
  };

 const handleActiveDate = (className, date) => {
  const d = date.toISOString().split('T')[0]
    if (className === 'starting-date') {
      setActiveStartingDate(date)
    }
    if (className === 'closing-date') {
      setActiveClosingDate(date)
    }
    if (className === 'training-date') {
      setActiveTrainingDate(date)
    }
  };

  const handleGenerateOfferIA = async (data) => {
    const response = await fetch(
      "https://konecta-2.onrender.com/api/v1/prediction/d0c5306d-38d2-44e5-ad71-4e9b1d4e6963",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
    )
    .then(res => res.json())
    .then(resp => {
      console.log(JSON.parse(resp))
      setIaOfferDataResponse(resp)})
    .catch(e => console.error(e));
  }
  
  const filterDataByDate = (data, start, end) => {
    const startDate = new Date(start)
    const endDate = new Date(end)
    data.filter((item) => {
      if ('Postulación' in item) {
        return item.Postulación >= startDate && item.Postulación <= endDate
      }
      if ('Fecha Inicio' in item) {
        return item[`Fecha Inicio`] >= startDate && item[`Fecha Fin`] <= endDate
      }
      else {
        console.log('no se encontraron coincidencias')
      }
    })
  }


  const handleCreateOffer = async (data) => {
    console.log(data)
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/offers',
      headers: { 
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config).then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch(error => console.error(error));
  };
 
  const handleCreateProcessDB = async (data) => {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/process',
      headers: { 
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config).then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch(error => console.error(error));
  };

    const handleCreateProcessEvaluar = (data) => async (user, pass) => {
      try {
            const res = await axios.post('https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/login', {
              username: user,
              password: pass,
            });
            return res.data.data
          } catch (error) {
            console.error(error.response.data)
            navigate('/admin');	
          }
      };

    return {
      notValidForm, setNotValidForm,
      activeStartingDate, setActiveStartingDate,
      activeClosingDate, setActiveClosingDate,
      activeTrainingDate, setActiveTrainingDate,
      formData, setFormData,
      iaOfferDataResponse, setIaOfferDataResponse,
      offerData, setOfferData,
      errorLabel, setErrorLabel,
      handleFieldChange,
      handleActiveDate,
      handleSideBarButtonClick,
      handleGenerateOfferIA,
      handleCreateOffer,
      handleCreateProcessDB,
      handleCreateProcessEvaluar,
      filterDataByDate,
      offerDataForIA, setOfferDataForIA,
      startValue, setStartValue,
      endValue, setEndValue
  }
}