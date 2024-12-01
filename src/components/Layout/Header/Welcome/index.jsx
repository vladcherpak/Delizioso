import React from "react";
import Image from "next/image";
import css from "./style.module.css";
import mainImage from "@/static/welcomeImage.png";

const Welcome = () => {
  return (
    <>
      <section className={css.welcome}>
        <div className={"container"}>
          <div className={css.main}>
            <div className={css.wrapper}>
              <Image className={css.img} src={mainImage} alt="Image" />
            </div>
            <div className={css.inner}>
              <h2 className={css.title}>Welcome to <span className={css.span}> delizioso </span></h2>
              <p className={css.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ultricies at eleifend proin. Congue nibh nulla
                malesuada ultricies nec quam{" "}
              </p>
              <button className={css.btn}>See our menu</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
