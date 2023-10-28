// CSS
import './sidebar.css'

//Components
import SideBarUser from '../sidebarUser/sidebar-user'

/* import User from '../../assets/icons/dashboard/unselected_ic_user.png' */
/* import SideBarItem from '../sidebarItem/sidebar-item' */
import SidebarButtonGroup from '../sidebarButtonGroup/sidebar-button-group'
// Assets
/* import img from '../../assets/img/home-pic.png' */

const { name, lastname, role } = {...localStorage}

export default function SideBar() {
  return (
    <>
      <div className='sidebarTop'> </div>
      <div className='sidebarContent'>
        <SideBarUser name={name} lastname={lastname} role={role}/>
        <SidebarButtonGroup />
      </div>
    </>
  )
}