import React from "react";
import Image from "next/image";
import css from "./style.module.css";
import Logo from "@/static/icons/Logo-head2.svg";
import { social } from "./utils";

const Footer = () => {
  return (
    <>
    <div className={css.footer}>
      <div className={"container"}>
        <div className={css.wrapper}>
          <div className={css.text__inner}>
            <Image className={css.logo} src={Logo} />
            <p className={css.about}>
              Viverra gravida morbi egestas facilisis tortor netus non duis
              tempor.
            </p>
            <ul className={css.social}>
              {social.map((item) => (
                <li key={item.id}>
                  <Image src={item.img} alt={item.img} />
                </li>
              ))}
            </ul>
          </div>
          <ul  className={`${css.page} ${css.list}`}>
            <h2>Page</h2>
            <li>Home</li>
            <li>Menu</li>
            <li>Order online</li>
            <li>Catering</li>
            <li>Reservation</li>
          </ul>
          <ul className={`${css.information} ${css.list}`}>
            <h2>Information</h2>
            <li>About us</li>
            <li>Testimonial</li>
            <li>Event</li>
          </ul>
          <ul className={`${css.gettouch} ${css.list}`}>
            <h2>Get in touch</h2>
            <li>3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</li>
            <li>delizioso@gmail.com</li>
            <li>+123 4567 8901</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
