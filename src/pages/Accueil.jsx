import { Link, useLocation, NavLink } from "react-router-dom";

import Logo from "../assets/img/Header/logo_EstrellaOffTheHook.png";


import "./Accueil.scss";

const Accueil = ({lang}) => {

    return (
        <div className="accueil">
            <div className="entete">
                <div>
                    <h2>{lang.welcome}</h2>
                    <p>{lang.welcomeDesc}</p>
                </div>
                <img className="accueil_logo" src={Logo} alt="logo" />
            </div>

            <div className="voir">
                <h3>{lang.lookAtThis}</h3>
                <button>
                    <NavLink to="/projects" preventScrollReset={true} >
                        {lang.look}
                    </NavLink>
                </button>
                {/* image sous btn */}
            </div>
        </div>
    );
  };
  
  export default Accueil;