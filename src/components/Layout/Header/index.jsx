import React from 'react'
import css from "./style.module.css"
import Logo from './Logo'
const Header = () => {
  return (
    <header className={css.container}>
    <div className={"container"}>
      <div className={css.wrapper}>
        <Logo/>
      </div>
    </div>
    </header>
  )
}

export default Header