/* eslint-disable no-unused-vars */
// CSS
import './form-grid.css'
// Custom hooks
import { useLoginLogic } from '../../utils/login';
// Components
import Button from '../button/button';
import FormDate from '../formDate/form-date'
import FormText from '../formText/form-text'
import FormDropdown from '../formDropdown/form-dropdown'
import FormTime from '../formTime/form-time'
import FormToggle from '../formToggle/form-toggle'


export default function FormGrid() {

  const {
    handleFieldChange,
  } = useLoginLogic();
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
          />
        </div>
        <div className="item4">
          <FormDropdown
            placeholder=''
            label='Servicio'
          />
        </div>
        <div className="item5">
          <FormDropdown
            placeholder=''
            label='Motivo'
          />
        </div>
        <div className="item6">
          <FormDate 
            label='Fecha Inicio'
          />
        </div>
        <div className="item7">
          <FormDate 
            label='Fecha Cierre'
          />
        </div>
        <div className="item8">
          <FormDropdown
            placeholder=''
            label='Tipo de Trabajo'
          />
        </div>
        <div className="item9">
          <FormText
            type='text'
            placeholder=''
            onChange={(e) => {
              handleFieldChange('applicants', e);
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
              handleFieldChange('reducer', e);
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
          />
        </div>
        <div className="item12">
          <FormDropdown
            placeholder=''
            label='Turno'
          />
        </div>
        <div className="item13">Lunes-Viernes</div>
        <div className="item14">
          <FormTime />
        </div>
        <div className="item15">
          <FormTime />
        </div>
        <div className="item16">
        <FormDropdown
            placeholder=''
            label='Fin de Semana'
          />
        </div>
        <div className="item17">          
          <FormTime />
        </div>
        <div className="item18">
          <FormTime />
        </div>
        <div className="item19">
        <FormDropdown
            placeholder=''
            label='Sede'
          />
        </div>
        <div className="item20">
        <FormDropdown
            placeholder=''
            label='Razón Social'
          />
        </div>
        <div className="item21">Datos de capacitación</div>
        <div className="item22">
          <FormDate />
        </div>
        <div className="item23">
          <FormDropdown
            placeholder=''
            label='Modalidad'
          />
        </div>
        <div className="item24">Lunes-Viernes</div>
        <div className="item25">
          <FormTime />
        </div>
        <div className="item26">
          <FormTime />
        </div>
        <div className="item27">
          <FormDropdown
            placeholder=''
            label='Fin de Semana'
          />
        </div>
        <div className="item28">
          <FormTime />
        </div>
        <div className="item29">
          <FormTime />
        </div>
        <div className="item30">
        <FormDropdown
            placeholder=''
            label='Formador'
          />
        </div>
        <div className="item31">
          <FormDropdown
            placeholder=''
            label='Perfil Evaluaciones'
          />
        </div>
        <div className="item32">
          <FormToggle label='Personas con discapacidad'/>
        </div>
        <div className="item33">
          <Button label="Crear Oferta" onClick={console.log('hola')} classButton='createOfferButton' disabled={false}/>
        </div>
      </div>
    </>
  )
}