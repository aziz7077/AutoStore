import React from "react";
import s from "./Advantages.module.scss";
import AdvantagesCard from "../AdvantagesCard/AdvantagesCard";
import adv from "../../public/adv.png";
import { motion } from "framer-motion";

const cars = [
  {
    id: 1,
    img: adv,
    title: "40+ unique cars for rent from our fleet",
  },
  {
    id: 2,
    img: adv,
    title: "40+ unique cars for rent from our fleet",
  },
  {
    id: 3,
    img: adv,
    title: "40+ unique cars for rent from our fleet",
  },
  {
    id: 4,
    img: adv,
    title: "40+ unique cars for rent from our fleet",
  },
  {
    id: 5,
    img: adv,
    title: "40+ unique cars for rent from our fleet",
  },
  {
    id: 6,
    img: adv,
    title: "40+ unique cars for rent from our fleet",
  },
];

const Advantages = () => {
  return (
    <>
      <div className={s.advantages}>
        <motion.h1
          initial="hidden"
          transition={{ duration: 0.7 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
        >
          Advantages
        </motion.h1>
        <div className={s.cars_catalog}>
          {cars.map((car) => {
            return (
              <AdvantagesCard key={car.id} img={car.img} title={car.title} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Advantages;
