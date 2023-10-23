// CSS
import './home.css'
// Components
import Side from '../../components/side/side'
import Login from '../../components/login/login'

export default function Home() {
  return (
    <>
      <div className='home'>
        <div className='side'>
          <Side />
        </div>
        <div className='login'>
          <Login />
        </div>
      </div>
    </>
  )
}