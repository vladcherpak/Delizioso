import React from "react";
import bigImage from "@/static/heroImage.jpg";
import Image from "next/image";
import css from "./style.module.css";

const Hero = () => {
  return (
    <>
      <section className={css.hero}>
        <div className={"container"}>
          <div className={css.inner}>
            <div className={css.text__inner}>
              <span className={css.small__info}>Restaurant</span>
              <h1 className={css.title}>Italian Cuisine</h1>
              <p className={css.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
                senectus dictum arcu sit tristique donec eget.
              </p>
              <div className={css.button__inner}>
              <button className={css.btn__order}>Order now</button>
              <button className={css.btn__reservation}>Reservation</button>
              </div>
            </div>
            <div className={css.image__inner}>
              <Image className={css.img} src={bigImage} alt="bigImage" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;