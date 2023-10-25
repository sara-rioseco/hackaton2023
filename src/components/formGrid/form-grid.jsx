/* eslint-disable no-unused-vars */
// CSS
import './form-grid.css'
// Custom hooks
import { useLoginLogic } from '../../utils/login';
// Components
import FormDate from '../formDate/form-date'
import FormText from '../formText/form-text'
import FormDropdown from '../formDropdown/form-dropdown'
import FormTime from '../formTime/form-time'
/* import FormToggle from '../formToggle/form-toggle' */

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
          />
        </div>
        <div className="item9">9</div>
        <div className="item10">10</div>
        <div className="item11">
          <FormDropdown
            placeholder=''
          />
        </div>
        <div className="item12">
          <FormDropdown
            placeholder=''
          />
        </div>
        <div className="item13">Lunes-Viernes</div>
        <div className="item14">
          <FormTime />
        </div>
        <div className="item15">
          <FormTime />
        </div>
        <div className="item16">16</div>
        <div className="item17">          
          <FormTime />
        </div>
        <div className="item18">
          <FormTime />
        </div>
        <div className="item19">19</div>
        <div className="item20">20</div>
        <div className="item21">Datos de capacitación</div>
        <div className="item22">
          <FormDate />
        </div>
        <div className="item23">23</div>
        <div className="item24">Lunes-Viernes</div>
        <div className="item25">
          <FormTime />
        </div>
        <div className="item26">
          <FormTime />
        </div>
        <div className="item27">27</div>
        <div className="item28">
          <FormTime />
        </div>
        <div className="item29">
          <FormTime />
        </div>
        <div className="item30">30</div>
        <div className="item31">31</div>
        <div className="item30">32</div>
        <div className="item30">33</div>
      </div>
    </>
  )
}