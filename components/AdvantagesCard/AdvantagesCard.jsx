import React from "react";
import s from "./AdvantagesCard.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

const AdvantagesCard = ({ title, img }) => {
  return (
    <>
 
        <motion.div
          layout
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.5 },
          }}
          className={s.car_card}
        >
          <Image src={img} alt="car" />
          <div className={s.car_card_footer}>
            <h3>{title}</h3>
          </div>
        </motion.div>
     
    </>
  );
};

export default AdvantagesCard;
