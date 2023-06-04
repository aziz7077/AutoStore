import React, { useState } from "react";
import s from "./BurgerMenu.module.scss";
import cn from 'classnames'
import useBodyScrollLock from "@/hooks/useBodyScrollLock";

const BurgerMenu = ({ nav, setNav }) => {
  // Состояние - для запрета прокрутки когда модалка открыта
  const [isLocked, setIsLocked] = useBodyScrollLock();

  const [open, setOpen] = useState(false)

  // Function - для setNav и isLocked
  const handleClick = () => {
    setOpen(!open)
    setIsLocked(!isLocked);
    setNav(!nav);
  };

  return (
    <div className={open ? cn(s.container, s.open): s.container} onClick={handleClick}>
      <div className={s.burgerMenu}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default BurgerMenu;
