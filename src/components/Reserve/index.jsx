import React from "react";
import Image from "next/image";
import css from "./style.module.css";
import reserveImage from "@/static/reserveImage2.png";

const Reserve = () => {
  return (
    <>
      <section className={css.reserve}>
        <div className={"container"}>
          <div className={css.main}>
            <div className={css.wrapper}>
              <Image className={css.img} src={reserveImage} alt="Image" />
            </div>
            <div className={css.inner}>
              <h2 className={css.title}>Let&apos;s reserve  <span className={css.span}> a table</span></h2>
              <p className={css.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ultricies at eleifend proin. Congue nibh nulla
                malesuada ultricies nec quam{" "}
              </p>
              <button className={css.btn}>Reservation</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reserve;
