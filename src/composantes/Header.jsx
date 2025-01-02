import "./Header.scss";

import ImgHeader from "../assets/img/Header/portfolio_header_xxl.jpg";
import ImgCD from "../assets/img/Header/portfolio_cd.png";
import Logo from "../assets/img/Header/logo_EstrellaOffTheHook.png";

const Header = () => {

    return (
        <header className="header">
            <div className="header-img"> 
                <img className="logo-header" src={Logo} alt="Estrella Off The Hook logo" />
                <h1>Portfolio</h1>
            </div>
                {/* <img className="header-cd" src={ImgCD} alt="CD logo" /> */}
        </header>   
    );
  };
  
  export default Header; 