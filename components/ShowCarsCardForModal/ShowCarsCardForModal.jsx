import React from "react";
import s from "./ShowCarsCardModal.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

const ShowCarsCardForModal = ({ img, title }) => {
  return (
    <div className={s.car_card}>
      <Image src={img} alt="car" />
      <div className={s.car_card_footer}>
        <h3>{title}</h3>
        <button>Rent</button>
      </div>
    </div>
  );
};

export default ShowCarsCardForModal;
