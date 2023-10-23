// CSS
import './side.css'

// Assets
import img from '../../assets/img/home-pic.png'

export default function Side() {
  return (
    <>
      <div className='round'>
        <img
          alt='happy-people'
          src={img}
          className="homePic"
        />
      </div>
    </>
  )
}