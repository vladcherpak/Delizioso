import React from "react";
import css from "./style.module.css";
import Image from "next/image";
import feedback__image from "@/static/feedbackw.jpg";
import feedback__all from "@/static/feedbackall.png";
const Feedback = () => {
  return (
    <>
      <section className={css.feedback}>
        <div className={css.container}>
          <div className={css.inner}>
            <h1 className={css.title}>Our customers say</h1>
            <div >
              <Image className={css.image__wrapper} src={feedback__image} alt="woman" />
            </div>
            <p className={css.name}>Starla Virgoun</p>
            <p className={css.work}>Financial advisor</p>
            <p className={css.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
              nec quam
            </p>
          </div>
          <div className={css.image__inner}>
            <Image className={css.img} src={feedback__all} alt="men" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
