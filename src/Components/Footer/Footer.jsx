import Glossary from '../../Data/Glossary';
import './Footer.css';

function Footer() {
    return (
        <>
            <div className="footer">
                <p>{Glossary.footer.copyright} &copy; by <a href={Glossary.footer.link}>{Glossary.footer.name}</a></p>
            </div>
        </>
    );
}

export default Footer;