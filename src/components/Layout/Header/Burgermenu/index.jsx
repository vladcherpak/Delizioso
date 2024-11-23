"use client"
import React, { useState }  from 'react'
import Image from "next/image";
import css from "./style.module.css"
import  burger from "@/static/icons/Home.svg"
const Burger = () => {
    const [show, setShow] = useState(false);
    const menuHandler = () => {
        setShow(!show);
        console.log(show);
      };
  return (
    <>
    <button onClick={() => menuHandler()}
            className={css.menuBtn}>
        <Image 
            src={burger} width={24} height={24}/>
    </button>
        <ul className={show ? css.list + " " + css.active : css.list}>
          <li className={css.item}> Home</li>
          <li className={css.item}> Menu</li>
          <li className={css.item}> About us</li>
          <li className={css.item}> Order online</li>
          <li className={css.item}> Reservation</li>
          <li className={css.item}> Contact us</li>
          <button className={css.burger__button}>Log in </button>
        </ul>
    </>
  )
}

export default Burger