/* eslint-disable no-unused-vars */
// CSS
import './form-grid.css'
// Custom hooks
import { usePostLogic } from '../../utils/post';
// Components
import Button from '../button/button';
import FormDate from '../formDate/form-date'
import FormText from '../formText/form-text'
import FormDropdown from '../formDropdown/form-dropdown'
import FormTime from '../formTime/form-time'
import FormToggle from '../formToggle/form-toggle'


export default function FormGrid() {
  const {
    notValidForm, 
    setNotValidForm,
    formData,
    setFormData,
    handleFieldChange,
    errorLabel,
    setErrorLabel,
    handleSideBarButtonClick,
    handleCreateProcessButtonClick,
  } = usePostLogic();
  return (
    <>
      <div className='gridContainer'>
        <div className="item1">Datos del proceso</div>
        <div className="item2">
          <FormText
            type='text'
            placeholder=''
            onChange={(e) => {
              handleFieldChange('igc-name', e);
            }}
            label='Nombre IGC'
            classInputLabel='labels'
            classInput='inputs'
          />
        </div>
        <div className="item3">
          <FormDropdown
            placeholder=''
            label='Cuenta'
            options = {[{label: 'Ventas', value: 'VENTAS'}, {label: 'Atención al cliente', value: 'ATENCIÓN AL CLIENTE'},{label: 'Croselling', value:'CROSELLING'},{label: 'Social Media', value:'SOCIAL MEDIA'}]}
            onChange={(e) => {
              handleFieldChange('account', e);
            }}
          />
        </div>
        <div className="item4">
          <FormDropdown
            placeholder=''
            label='Servicio'
            options = {[{label: 'Ventas', value: 'VENTAS'}, {label: 'Atención al cliente', value: 'ATENCIÓN AL CLIENTE'},{label: 'Croselling', value:'CROSELLING'},{label: 'Social Media', value:'SOCIAL MEDIA'}]}
            onChange={(e) => {
              handleFieldChange('service', e);
            }}
          />
        </div>
        <div className="item5">
          <FormDropdown
            placeholder=''
            label='Motivo'
            options = {[{label: 'Ventas', value: 'VENTAS'}, {label: 'Atención al cliente', value: 'ATENCIÓN AL CLIENTE'},{label: 'Croselling', value:'CROSELLING'},{label: 'Social Media', value:'SOCIAL MEDIA'}]}
            onChange={(e) => {
              handleFieldChange('reason', e);
            }}
          />
        </div>
        <div className="item6">
          <FormDate 
            label='Fecha Inicio'
            onChange={(e) => {
              handleFieldChange('starting-date', e);
            }}
          />
        </div>
        <div className="item7">
          <FormDate 
            label='Fecha Cierre'
            onChange={(e) => {
              handleFieldChange('closing-date', e)
            }}
          />
        </div>
        <div className="item8">
          <FormDropdown
            placeholder=''
            label='Tipo de Trabajo'
            options = {[{label: 'Presencial', value: 'presencial'}, {label: 'Remoto', value: 'remoto'},{label: 'Híbrido', value:'hibrido'}]}
            onChange={(e) => {
              handleFieldChange('work-schedule', e)
            }}
          />
        </div>
        <div className="item9">
          <FormText
            type='text'
            placeholder=''
            onChange={(e) => {
              handleFieldChange('applicants-number', e);
            }}
            label='Postulantes'
            classInputLabel='labels'
            classInput='inputs'
          />
        </div>
        <div className="item10">
          <FormText
            type='text'
            placeholder=''
            onChange={(e) => {
              handleFieldChange('reducer-number', e);
            }}
            label='Reductor'
            classInputLabel='labels'
            classInput='inputs'
          />
        </div>
        <div className="item11">
           <FormDropdown
            placeholder=''
            label='Modalidad'
            options = {[{label: 'Ventas', value: 'VENTAS'}, {label: 'Atención al cliente', value: 'ATENCIÓN AL CLIENTE'},{label: 'Croselling', value:'CROSELLING'},{label: 'Social Media', value:'SOCIAL MEDIA'}]}
            onChange={(e) => {
              handleFieldChange('process-modality', e);
            }}
          />
        </div>
        <div className="item12">
          <FormDropdown
            placeholder=''
            label='Turno'
            options = {[{label: 'Ventas', value: 'VENTAS'}, {label: 'Atención al cliente', value: 'ATENCIÓN AL CLIENTE'},{label: 'Croselling', value:'CROSELLING'},{label: 'Social Media', value:'SOCIAL MEDIA'}]}
            onChange={(e) => {
              handleFieldChange('turn', e)
            }}
          />
        </div>
        <div className="item13">Lunes-Viernes</div>
        <div className="item14">
          <FormTime 
              label='Inicio'
          />
        </div>
        <div className="item15">
          <FormTime 
              label='Fin'
          />
        </div>
        <div className="item16">
          <FormDropdown
            placeholder=''
            label='Fin de Semana'
            options = {[{label: 'Ventas', value: 'VENTAS'}, {label: 'Atención al cliente', value: 'ATENCIÓN AL CLIENTE'},{label: 'Croselling', value:'CROSELLING'},{label: 'Social Media', value:'SOCIAL MEDIA'}]}
            onChange={(e) => {
              handleFieldChange('turn', e)
            }}
          />
        </div>
        <div className="item17">          
          <FormTime 
            label='Inicio'
          />
        </div>
        <div className="item18">
          <FormTime 
            label='Inicio'
          />
        </div>
        <div className="item19">
          <FormDropdown
            placeholder=''
            label='Sede'
            options = {[{label: 'Ventas', value: 'VENTAS'}, {label: 'Atención al cliente', value: 'ATENCIÓN AL CLIENTE'},{label: 'Croselling', value:'CROSELLING'},{label: 'Social Media', value:'SOCIAL MEDIA'}]}
            onChange={(e) => {
              handleFieldChange('turn', e)
            }}
          />
        </div>
        <div className="item20">
         <FormDropdown
            placeholder=''
            label='Razón Social'
            options = {[{label: 'Ventas', value: 'VENTAS'}, {label: 'Atención al cliente', value: 'ATENCIÓN AL CLIENTE'},{label: 'Croselling', value:'CROSELLING'},{label: 'Social Media', value:'SOCIAL MEDIA'}]}
            onChange={(e) => {
              handleFieldChange('turn', e)
            }}
          />
        </div>
        <div className="item21">Datos de capacitación</div>
        <div className="item22">
          <FormDate 
            label='Inicio Capacitación'
          />
        </div>
        <div className="item23">
          <FormDropdown
            placeholder=''
            label='Modalidad'
            options = {[{label: 'Ventas', value: 'VENTAS'}, {label: 'Atención al cliente', value: 'ATENCIÓN AL CLIENTE'},{label: 'Croselling', value:'CROSELLING'},{label: 'Social Media', value:'SOCIAL MEDIA'}]}
            onChange={(e) => {
              handleFieldChange('turn', e)
            }}
          />
        </div>
        <div className="item24">Lunes-Viernes</div>
        <div className="item25">
          <FormTime 
            label='Inicio'
          />
        </div>
        <div className="item26">
          <FormTime 
            label='Fin'
          />
        </div>
        <div className="item27">
          <FormDropdown
            placeholder=''
            label='Fin de Semana'
            options = {[{label: 'Ventas', value: 'VENTAS'}, {label: 'Atención al cliente', value: 'ATENCIÓN AL CLIENTE'},{label: 'Croselling', value:'CROSELLING'},{label: 'Social Media', value:'SOCIAL MEDIA'}]}
            onChange={(e) => {
              handleFieldChange('turn', e)
            }}
          />
        </div>
        <div className="item28">
          <FormTime 
            label='Inicio'
          />
        </div>
        <div className="item29">
          <FormTime 
            label='Fin'
          />
        </div>
        <div className="item30">
         <FormDropdown
            placeholder=''
            label='Formador'
            options = {[{label: 'Ventas', value: 'VENTAS'}, {label: 'Atención al cliente', value: 'ATENCIÓN AL CLIENTE'},{label: 'Croselling', value:'CROSELLING'},{label: 'Social Media', value:'SOCIAL MEDIA'}]}
            onChange = {(e) => {
              handleFieldChange('turn', e)
            }}
          /> 
        </div>
        <div className="item31">
          <FormDropdown
            placeholder=''
            label='Perfil Evaluaciones'
            options = {[{label: 'Ventas', value: 'VENTAS'}, {label: 'Atención al cliente', value: 'ATENCIÓN AL CLIENTE'},{label: 'Croselling', value:'CROSELLING'},{label: 'Social Media', value:'SOCIAL MEDIA'}]}
            onChange={(e) => {
              handleFieldChange('profile-name', e);
            }}
          />
        </div>
        <div className="item32">
          <FormToggle label='Personas con discapacidad'/>
        </div>
        <div className="item33">
          <Button label="Generar Oferta" classButton='createOfferButton' disabled={notValidForm}/>
        </div>
      </div>
    </>
  )
}