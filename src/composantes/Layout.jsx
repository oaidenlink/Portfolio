import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {motion} from 'framer-motion';

import "./Layout.scss";

const Layout = ({setLangue, lang, language}) => {

  return (
    <div className="container">
      <Header />
      
      <div className="lang">
        <button onClick={() => setLangue(!lang)} >
          {language.Language}
        </button>
      </div>

      <main>
        <Nav navLang={language}/>
        <Outlet />
      </main>

      <Footer language={language.Footer}/>
    </div>
  );
};

export default Layout;
