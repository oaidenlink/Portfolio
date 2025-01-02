import "./Contact.scss";

const Contact = ({lang}) => {


    return (
        <div className="page-contact">
            <div className="entete">
                <h2>{lang.ContactDesc}</h2>
                <p><a href="mailto:estrellaoffthehook@gmail.com">{lang.ContactEmail}</a></p>
            </div>

            <div className="more">
                <h3>{lang.ContactSeeMoreTitle}</h3>
                <p>{lang.ContactSeeMore}</p>

                <div className="socials">
                    <a href={lang.ContactLinkedIn}>LinkedIn</a>
                    <a href={lang.ContactBehance}>Behance</a>
                    <a href={lang.ContactX}>X</a>
                    <a href={lang.ContactInstagram}>Instagram</a>
                </div>

                <p>{lang.ContactElse}</p>
            </div>
        </div>
    );
  };
  
  export default Contact;