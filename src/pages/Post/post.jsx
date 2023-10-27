/* eslint-disable no-unused-vars */
// CSS
import './post.css'
// Components
import Input from '../../components/input/input'
import Button from '../../components/button/button'
// Assets
import show from '../../assets/icons/login/show-password.png'
import hide from '../../assets/icons/login/hide-password.png'
// Custom hook
import { usePostLogic } from '../../utils/post'
//React router
import { useLocation } from 'react-router-dom'
// Components
import SideBar from '../../components/sidebar/sidebar'
import FormGrid from '../../components/formGrid/form-grid'
import ListApplicants from '../ListApplicants/list-applicants'
import OfertaGenerate from '/src/components/convocatorias/oferta'
import ProcessList from '../ProcessList/process-list'
import { Box } from '@mui/system'

export default function Post() {
const location = useLocation();
    return (
    <>
      <div className='createPost'>
        <div className='sideBar'>
          <SideBar />
        </div>
        <div className='mainBody'>
          <div className='headerBar'></div>
          {location.pathname === "/post" && (
            <div className='mainContent'>
            <h2 className='title'>Crear Convocatorias</h2>
            <h3 className='subtitle'>Convocatorias</h3>
            <Box display='flex'>
            <FormGrid />
            <OfertaGenerate />
            </Box>
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