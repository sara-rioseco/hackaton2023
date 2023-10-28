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
import {Container,Grid} from '@mui/material'

export default function Post() {
const location = useLocation();
    return (
   
    
    
      
     
        <Grid container spacing={4}>
          <Grid item xs={12} md={2}>
            <div className='sideBar'>
              <SideBar />
            </div>
          </Grid>
          <Grid item xs={12} md={10}>
            <div className='mainBody'>
              <div className='headerBar'></div>
              <div>
                {location.pathname === "/post" && (
                  <Container maxWidth="lg">
                    <h2 className='title'>Crear Convocatorias</h2>
                    <h3 className='subtitle'>Convocatorias</h3>
                    
                      <main style={{ display: "flex", justifyContent: "space-between" }}>
                      <Grid item xs={12} md={6}>
                      <FormGrid />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <OfertaGenerate />
                        </Grid>

                        
                       
                      </main>
                   
                  </Container>
                )}
              </div>
            </div>
          </Grid>
        </Grid>
      );
    }
     
    