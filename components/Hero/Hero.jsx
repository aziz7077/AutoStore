import React from "react";
import s from "./Hero.module.scss";
import { motion } from 'framer-motion'

import SocialNetwork from "../SocialNetwork/SocialNetwork";

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.hero__background}>
        <div className={s.hero__gradient}>
          <motion.div
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            className={s.hero__title}>
            <h1>Dubai</h1>
            <p>luxury car rental</p>
          </motion.div>
          {/* hero__title */}

          <SocialNetwork classNameHero={s.hero__social} />
          {/* hero__social */}
        </div>
        {/* hero__gradient */}
      </div>
      {/* hero__background */}
    </section>
    // hero
  );
};

export default Hero;
