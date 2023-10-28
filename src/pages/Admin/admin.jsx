/* eslint-disable no-unused-vars */
// CSS
import './admin.css'
// Custom hook
import { useAdminLogic } from '../../utils/admin'
//React router
import { useLocation } from 'react-router-dom'
// Components
import SideBar from '../../components/sidebar/sidebar'
import FormGrid from '../../components/formGrid/form-grid'
import ListApplicants from '../ListApplicants/list-applicants'
import OfertaGenerate from '/src/components/convocatorias/oferta'
import ProcessList from '../ProcessList/process-list'


export default function Admin() {
  const { iaOfferDataResponse, setIaOfferDataResponse } = useAdminLogic();
  const location = useLocation();
    return (
    <>
      <div className='createPost'>
        <div className='sideBar'>
          <SideBar />
        </div>
        <div className='mainBody'>
          <div className='headerBar'></div>
          {location.pathname === "/admin" && (
            <div className='mainContent'>
              <h2 className='title'>Crear Convocatorias</h2>
              <h3 className='subtitle'>Convocatorias</h3>
              <div className='gridOfferView'>
                <FormGrid />
                <OfertaGenerate data={iaOfferDataResponse}/>
              </div>
          </div>) }
          {location.pathname === "/applicants" && (
            <ListApplicants />
          )}
          {location.pathname === "/listprocesses" && (
            <ProcessList />
          )}

        </div>
      </div>
    </>
  )
}