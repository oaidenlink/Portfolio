import "./Projects.scss";

import ImgAja from "../assets/img/AjaEtLaForetDesEsprits.jpg";
import ImgDemon from "../assets/img/LePetitDemon.jpg";
import ImgAstres from "../assets/img/AstresDeNosComplices.jpg";
import StickerAstres from "../assets/img/sticker_Astres.png";
import ImgFlorithe from "../assets/img/florithe_portfolio.png";
import ImgSundrop from "../assets/img/sundrop.png";
import ImgSketchbook from "../assets/img/sketchbook06.jpg";

const Projects = ({lang}) => {

    return (
        <div className="projects">
            <div className="entete">
                <h2>{lang.projectsTitle}</h2>
                <p>{lang.projectsDesc}</p>
            </div>

            <div className="school-projects">
                <div className="Aja">
                    <div className="details">
                        <h3>{lang.projectsAja.Title}</h3>
                        <p className="class">{lang.projectsAja.Class}</p>
                        <p className="tools">{lang.projectsAja.Tools}</p>
                        <p className="quote">{lang.projectsAja.Quote}</p>
                        <p className="desc">{lang.projectsAja.Desc}</p>
                    </div>
                    <div className="assets">
                        <div className="images">
                            <img src={ImgAja} alt="placeholder" />
                        </div>
                        <a target="blank" href={lang.projectsAja.Link} className="test">{lang.projectsAja.TestGame}</a>
                    </div>
                </div>

                <div className="Demon">
                    <div className="details">
                        <h3>{lang.projectsDemon.Title}</h3>
                        <p className="class">{lang.projectsDemon.Class}</p>
                        <p className="tools">{lang.projectsDemon.Tools}</p>
                        <p className="quote">{lang.projectsDemon.Quote}</p>
                        <p className="desc">{lang.projectsDemon.Desc}</p>
                    </div>
                    <div className="assets">
                        <div className="images">
                            <img src={ImgDemon} alt="placeholder" />
                        </div>
                        <a href={lang.projectsDemon.Link} className="test">{lang.projectsDemon.TestGame}</a>
                    </div>
                </div>

                <div className="Astres">
                    <div className="details">
                        <h3>{lang.projectsAstres.Title}</h3>
                        <p className="class">{lang.projectsAstres.Class}</p>
                        <p className="tools">{lang.projectsAstres.Tools}</p>
                        <p className="quote">{lang.projectsAstres.Quote}</p>
                        <p className="desc">{lang.projectsAstres.Desc}</p>
                    </div>
                    <div className="assets">
                        <div className="images">
                            <img src={ImgAstres} alt="placeholder" />
                        </div>
                        {/* <iframe frameborder="0" src="https://itch.io/embed/2716341?border_width=0&amp;bg_color=021C28&amp;fg_color=ffffff&amp;link_color=8eb2a2&amp;border_color=2C496D" width="550" height="165"><a href="https://estrellaoffthehook.itch.io/les-astres-de-nos-complices">Les Astres de nos Complices by EstrellaOffTheHook</a></iframe> */}
                        <a href={lang.projectsAstres.Link} className="test">{lang.projectsAstres.TestGame}</a>
                    </div>
                </div>
            </div>

            <div className="personal-projects">
                <h3>{lang.projectsPersonal.Title}</h3>
                <p className="class">{lang.projectsPersonal.Class}</p>
                <p className="desc">{lang.projectsPersonal.Desc}</p>
                <p className="tools">{lang.projectsPersonal.Tools}</p>

                <div className="grid">
                    <div className="item">
                        <img src={ImgFlorithe} alt={lang.projectsPersonal.Images.Florithe.alt} />
                        <h4>{lang.projectsPersonal.Images.Florithe.title}</h4>
                        <p>{lang.projectsPersonal.Images.Florithe.desc}</p>
                    </div>
                    
                    <div className="item">
                        <img src={ImgSundrop} alt={lang.projectsPersonal.Images.Sundrop.alt} />
                        <h4>{lang.projectsPersonal.Images.Sundrop.title}</h4>
                        <p>{lang.projectsPersonal.Images.Sundrop.desc}</p>
                    </div>

                    <div className="item">
                        <img src={ImgSketchbook} alt={lang.projectsPersonal.Images.Sketchbook.alt} />
                        <h4>{lang.projectsPersonal.Images.Sketchbook.title}</h4>
                        <p>{lang.projectsPersonal.Images.Sketchbook.desc}</p>
                    </div>

                </div>
            </div>
        </div>
    );
  };
  
  export default Projects;