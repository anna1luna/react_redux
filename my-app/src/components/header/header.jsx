import s from './header.module.css'

const Header = () => {
  return (
    <header className={`${s.header} bg-info-subtle`}>
  <img className={s.header_logo} src="https://cdn.iconscout.com/icon/free/png-512/free-social-media-3660049-3094483.png?f=avif&w=512" alt="logo"></img>
  <h1 className={s.header_heading} > My Social Network </h1>
</header>
  )
}

export default Header