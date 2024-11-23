import React from 'react'
import css from "./style.module.css"
import Logo from './Logo'
import cart from "@/static/icons/Cart.svg"
import Image from "next/image";
import Burger from './Burgermenu';
const Header = () => {
  return (
    <header className={css.header}>
    <div className={"container"}>
      <div className={css.wrapper}>
        <Logo/>
        <div className={css.header__inner}>
          <button className={css.cart}>
            <Image  src={cart} width={24} height={24}/>
          </button>
          <Burger/>
        </div>
      </div>
    </div>
    </header>
  )
}

export default Header