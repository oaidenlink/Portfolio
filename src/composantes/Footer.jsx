
import "./Footer.scss";

const Footer = ({language}) => {
  return (
    <footer className="footer">

      <div className="copyright">
        <p>{language.ThankYou}</p>
        <p>{language.Copyright}</p>
      </div>

      <div className="contact">
        <h4>Contact</h4>
        <p className="email"><a href="mailto:estrellaoffthehook@gmail.com">estrellaoffthehook@gmail.com</a></p>

        <div className="socials">
          <a href={language.ContactLinkedIn}>LinkedIn</a>
          <a href={language.ContactBehance}>Behance</a>
          <a href={language.ContactX}>X</a>
          <a href={language.ContactInstagram}>Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
