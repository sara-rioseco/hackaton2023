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

// Components
import SideBar from '../../components/sidebar/sidebar'
import FormGrid from '../../components/formGrid/form-grid'

export default function Post() {

  return (
    <>
      <div className='createPost'>
        <div className='sideBar'>
          <SideBar />
        </div>
        <div className='mainBody'>
          <div className='headerBar'>

          </div>
          <div className='mainContent'>
            <h2 className='titlePost'>Crear Convocatorias</h2>
            <h3 className='subtitlePost'>Convocatorias</h3>
            <FormGrid />
          </div>
        </div>
      </div>
    </>
  )
}