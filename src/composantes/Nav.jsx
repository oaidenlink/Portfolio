import React from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { useState } from "react";
import {AnimatePresence, motion} from 'framer-motion';

import "./Nav.scss";

const Nav = ({navLang}) => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.2 }}
      className="nav-principale"
    >
      <ul>
        <motion.li animate={{scale: 1.1}}>
          <NavLink to="/accueil" preventScrollReset={true} >
          {navLang.Home.nav}
          </NavLink>
        </motion.li>
        <motion.li animate={{scale: 1.1}}>
          <NavLink to="/projects" preventScrollReset={true} >
          {navLang.Projects.nav}
          </NavLink>
        </motion.li>
        <motion.li animate={{scale: 1.1}}>
          <NavLink to="/about" preventScrollReset={true} >
            {navLang.About.nav}
          </NavLink>
        </motion.li>
        <motion.li animate={{scale: 1.1}}>
          <NavLink to="/Contact" preventScrollReset={true} >
          {navLang.Contact.nav}
          </NavLink>
        </motion.li>
      </ul>
    </motion.nav>
    </AnimatePresence>
  );
};

export default Nav;
