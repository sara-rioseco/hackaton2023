/* eslint-disable no-unused-vars */
// CSS
import './admin.css'
// Custom hook
import { useAdminLogic } from '../../utils/admin'
//React router
import { useLocation } from 'react-router-dom'
// Components
import Button from '../../components/button/button'
import SideBar from '../../components/sidebar/sidebar'
import FormGrid from '../../components/formGrid/form-grid'
import ListApplicants from '../ListApplicants/list-applicants'
import OfertaGenerate from '/src/components/convocatorias/oferta'
import ProcessListTable from '../ProcessList/process-list'
import { useEffect, useState } from 'react'


export default function Admin() {
  const { iaOfferDataResponse,
    setIaOfferDataResponse, 
    handleCreateOffer,
    handleGenerateOfferIA,
    startValue, setStartValue, endValue, setEndValue
  } = useAdminLogic();
  const location = useLocation();
  
  useEffect(() => {
/*     console.log('aqui', iaOfferDataResponse) */
  }, [iaOfferDataResponse])

  const [ oferta, setOferta] = useState(null);
  const [ clickOffer, setClickOffer ] = useState(false)

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
              <div className='mainContentUpperBar'>
                <div className='mainContentTitleBar'>
                  <h2 className='title'>Crear Convocatorias</h2>
                  <h3 className='subtitle'>Convocatorias</h3>
                </div>
                <div  className='mainContentButton'>
                <Button label="+ Crear IGC" classButton='createOfferButton' disabled={false} onClick={() => {
                console.log(iaOfferDataResponse)}}/>
                </div>
              </div>
              <div className='gridOfferView'>
                <FormGrid setOferta={setOferta} setClickOffer={setClickOffer}/>
                <OfertaGenerate data={oferta} setClickOffer={setClickOffer} clickOffer={clickOffer}/>
              </div>
          </div>) }
          {location.pathname === "/applicants" && (
            <ListApplicants startValue={startValue} setStartValue={setStartValue} endValue={endValue} setEndValue={setEndValue}/>
          )}
          {location.pathname === "/listprocesses" && (
            <ProcessListTable />
          )}

        </div>
      </div>
    </>
  )
}