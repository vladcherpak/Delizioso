import React from "react";
import Image from "next/image";
import css from "./style.module.css";
import lines from "@/static/line.svg";

const Open = () => {
  return (
    <>
      <section className={css.open}>
        <div className={`${"container"} ${css.wrapper__inner}`}>
          {/* <Image className={css.lines} src={lines}></Image> */}
          <div className={css.wrapper}>
            <h1 className={css.title}>we are open from</h1>
            <h2 className={css.subtitle}>Monday-Sunday</h2>
            <h6 className={css.descr}>Launch : Mon-Sun : 11:00am-02:00pm</h6>
            <h6 className={css.descr}>Dinner : sunday : 04:00pm-08:00pm</h6>
            <h6 className={`${css.descr} ${css.descr__last}`}>
              04:00pm-09:00pm
            </h6>
            <div className={css.btn__inner}>
              <button className={css.btn__order}>Order now</button>
              <button className={css.btn__reservation}>Reservation</button>
            </div>
          </div>
          {/* <Image className={css.lines} src={lines}></Image> */}
        </div>
      </section>
    </>
  );
};

export default Open;