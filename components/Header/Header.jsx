import React, { useEffect, useState } from "react";
import s from "./Header.module.scss";
import { motion } from 'framer-motion'

import CustomSelect from "../CustomSelect/CustomSelect";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Logo from "../Logo/Logo";
import NavBurgerMenu from "../NavBurgerMenu/NavBurgerMenu";

const optionsCity = [
  { id: 1, label: "Dubai" },
  { id: 2, label: "Moscow" },
  { id: 3, label: "Budapest" },
  { id: 4, label: "Wiesbaden" },
];

const optionsLanguage = [
  { id: 5, label: "ENG" },
  { id: 6, label: "RUS" },
  { id: 7, label: "KGZ" },
  { id: 8, label: "XZ" },
];

const Header = () => {
  // Dubai
  const [optionsCityState, setOptionsCityState] = useState(
    optionsCity[0].label
  );

  const [cityOpen, setCityOpen] = useState(false);

  const handleOptionClickCity = (value) => {
    console.log("City", cityOpen);
    setCityOpen(!cityOpen);
    setOptionsCityState(value);
  };

  // ===================================================
  // Eng
  const [optionsLanguageState, setOptionsLanguageState] = useState(
    optionsLanguage[0].label
  );
  const [languageOpen, setLanguageOpen] = useState(false);

  const handleOptionClickLanguage = (value) => {
    console.log("language", languageOpen);
    setLanguageOpen(!languageOpen);
    setOptionsLanguageState(value);
  };

  // ===================================================
  // Проверочки когда два селекта одновременно открыты
  // Проверка на первый селект
  useEffect(() => {
    if (cityOpen === true && languageOpen === true) {
      setLanguageOpen(!languageOpen);
    }
  }, [cityOpen]);

  // Проверка на второй селект
  useEffect(() => {
    if (cityOpen === true && languageOpen === true) {
      setCityOpen(!cityOpen);
    }
  }, [languageOpen]);

  // --------------------------------------------------------
  // Состояние - навигационного бургер меню
  const [nav, setNav] = useState(false);

  return (
    <header className={s.header}>
      <nav className={s.header__nav}>
        <BurgerMenu setNav={setNav} nav={nav} />
        <NavBurgerMenu nav={nav} />

        <ul className={s.header__ul}>
          <motion.li
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            className={s.header__li}>
            <a href="#carList">Car List</a>
          </motion.li>
          <motion.li
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            className={s.header__li}>
            <a href="#aboutUs">About Us</a>
          </motion.li>
          <motion.li
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            className={s.header__li}>
            <a href="#contacts">Contacts</a>
          </motion.li>
        </ul>
        {/* header__ul */}

        <Logo classNameTitlesOfHeader={s.header__title} />

        <ul className={s.header__ul_last}>
          <motion.li
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            className={s.header_number}>+971 58 590 7875</motion.li>

          <CustomSelect
            options={optionsCity}
            isOpen={cityOpen}
            setIsOpen={setCityOpen}
            onClick={handleOptionClickCity}
            selectedOption={optionsCityState}
          />
          <CustomSelect
            options={optionsLanguage}
            isOpen={languageOpen}
            setIsOpen={setLanguageOpen}
            onClick={handleOptionClickLanguage}
            selectedOption={optionsLanguageState}
          />
        </ul>
        {/* right_ul */}
      </nav>
      {/* nav */}
    </header>
  );
};

export default Header;
