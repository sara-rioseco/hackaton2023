// CSS
import './sidebar.css'
//Components
import SideBarUser from '../sidebarUser/sidebar-user'
import SideBarItem from '../sidebarItem/sidebar-item'
// Assets
/* import img from '../../assets/img/home-pic.png' */

export default function SideBar() {
  return (
    <>
      <div className='sidebarTop'> </div>
      <div className='sidebarContent'>
        <SideBarUser />
        <SideBarItem />
        <SideBarItem />
        <SideBarItem />
      </div>
    </>
  )
}