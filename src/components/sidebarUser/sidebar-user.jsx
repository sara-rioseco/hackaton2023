import PropTypes from 'prop-types'; 
// CSS
import './sidebar-user.css'

// Assets
import userImg from '../../assets/icons/dashboard/ic_user.png'

export default function SideBarUser({ name, lastname, role}) {
  return (
    <>
      <div className='sidebarUser'>
        <div className='sidebarUserImg'>
            <img src={userImg} alt='user' id='userImg'></img>
        </div>
        <div className='sideBarUserText'>
          <div className='sideBarUserFullName'>{name} {lastname}</div>
          <div className='sideBarUserRole'>{role}</div>
        </div>
      </div>
    </>
  )
}

SideBarUser.propTypes = {
  name: PropTypes.string,
  lastname: PropTypes.string,
  role: PropTypes.string
};