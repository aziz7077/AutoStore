import React from "react";
import s from "./NavBurgerMenu.module.scss";
import cn from "classnames";

import SocialNetwork from "../SocialNetwork/SocialNetwork";
import Logo from "../Logo/Logo";


const NavBurgerMenu = ({ nav }) => {
  return (
    <div
      className={nav ? cn(s.collapsed, s.expanded) : s.collapsed}
    >
      <div className={s.collapsed__gradient}>

        <header className={s.collapsed__header}>
          <Logo />
        </header>

        <nav className={s.collapsed__nav}>
          <ul>
            <li>
              <a href="#">Car List</a>
            </li>
            <li>
              <a href="#">Yacht list</a>
            </li>
            <li>
              <a href="#">Chauffeur</a>
            </li>
            <li>
              <a href="#">Conditions</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </nav>

        <footer className={s.footer}>
          <p className={s.footer__content}>
            24 4th St - Al Quoz - Al <br /> Quoz Industrial Area 3 - Dubai
          </p>
          <div className={s.footer__social}>
            <p>+971 58 590 7875</p>
            <SocialNetwork />
            {/* <SocialNetwork /> */}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NavBurgerMenu;
