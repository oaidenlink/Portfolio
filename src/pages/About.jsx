import "./About.scss";

import FaceReveal from "../assets/img/AidenPfp.jpg";

import CV_Fre from "./cv/AidenOliveiraCV_Fre.pdf"
import CV_Eng from "./cv/AidenOliveiraCV_Eng.pdf"

const About = ({lang}) => {

    return (
        <div className="about">
            <div className="entete">
                <h2>{lang.AboutTitle}</h2>
            </div>

            <div className="about">
                <h3>{lang.AboutWho}</h3>

                <section className="its-me">
                    <div className="image">
                        <img src={FaceReveal} alt={lang.AboutMeAlt} />
                    </div>

                    <div className="details">
                        <div>
                            <span className="material-icons"> person </span>
                            <p>{lang.AboutName}</p>
                        </div>
                        <div>
                            <span className="material-icons"> cake </span>
                            <p>{lang.AboutBirthday}</p>
                        </div>
                        <div>
                            <span className="material-icons"> favorite </span>
                            <p>{lang.AboutLikes}</p>
                        </div>
                        <div>
                            <span className="material-icons"> star </span>
                            <p>{lang.AboutDesc}</p>
                        </div>

                        <div className="business">
                            <span className="material-icons"> mail_outline </span>
                            <p className="email"><a href="mailto:estrellaoffthehook@gmail.com">{lang.AboutMeEmail}</a></p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="abilities">
                <h3>{lang.AboutAbilitiesTitle}</h3>

                <section className="item">
                    <h4>{lang.AboutAbilitiesProg}</h4>
                    <p>{lang.AboutAbilitiesProgDesc}</p>
                </section>
                <section className="item">
                    <h4>{lang.AboutAbilitiesAnim}</h4>
                    <p>{lang.AboutAbilitiesAnimDesc}</p>
                </section>
                <section className="item">
                    <h4>{lang.AboutAbilitiesDesign}</h4>
                    <p>{lang.AboutAbilitiesDesignDesc}</p>
                </section>
            </div>

            <div className="cv">
                <h3>{lang.AboutCVTitle}</h3>
                <p>{lang.AboutCVDesc}</p>
                <a className="cv-download" download href={CV_Fre}>Téléchargez mon CV en français !</a>
                <a className="cv-download" download href={CV_Eng}>Download my CV in English!</a>
                {/* <a class="cv-download" href={lang.AboutCVDownload} download="AidenOliveiraCV">{lang.AboutCVDownloadDesc}</a> */}
            </div>
        </div>
    );
  };
  
  export default About;