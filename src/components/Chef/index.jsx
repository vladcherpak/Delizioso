import React from "react";
import css from "./style.module.css";
import Image from "next/image";
import { masChefs } from "./utils";
const Chef = () => {
  return (
    <>
      <section className={css.chef}>
        <div className={css.container}>
          <div className={css.all__inner}>
            <h1 className={css.title}>Our greatest chef</h1>
            <ul className={css.chef__list}>
              {masChefs.map((chef) => (
                <li className={css.item} key={chef.id}>
                  <Image
                    className={css.chef__foto}
                    src={chef.img}
                    alt={chef.name}
                  />
                  <p className={css.chef__name}>{chef.name}</p>
                  <p className={css.chef__post}>{chef.post}</p>
                </li>
              ))}
            </ul>
            <button className={css.btn__view}>View all</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chef;