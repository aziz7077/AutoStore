import React from "react";
import s from "./Review.module.scss";
import ReviewCard from "../ReviewCard/ReviewCard";
import { motion } from 'framer-motion'
import { CarVideos } from "@/constants/constants";

const Review = () => {
  return (
    <section className={s.Reviews}>
      <motion.h1
        initial="hidden"
        transition={{ duration: 0.7 }}
        whileInView="visible"
        variants={{
          hidden: { scale: 0 },
          visible: { scale: 1 },
        }}
      >Reviews</motion.h1>
      <div className={s.videos}>
        <ReviewCard CarVideos={CarVideos} />
      </div>
    </section>
  );
};

export default Review;
