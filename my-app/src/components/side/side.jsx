import s from './side.module.css'

const Side = () => {
  return (
    <nav className= {`${s.side} bg-info-subtle`}>
          <ul className={s.ul}> 
            <li className={s.item}> <a className={`${s.link} ${s.active}`} href="/profile">Profile</a> </li>
            <li className={s.item}> <a className={s.link} href="/msgs">Messages</a> </li>
            <li className={s.item}> <a className={s.link} href="#s">News</a> </li>
            <li className={s.item}> <a className={s.link} href="#s">Music</a> </li>
            <br></br>
            <li className={s.item}> <a className={s.link} href="#s">Settings</a> </li>
          </ul>              
        </nav>
  )
}

export default Side