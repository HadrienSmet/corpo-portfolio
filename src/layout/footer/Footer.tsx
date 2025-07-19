import { DoubleUp, Envelope, Github, Linkedin } from "@/assets";

import "./footer.scss";
import { useCssVariable } from "@/hooks";

export const Footer = () => {
    const handleScrollToTop = () => window.scrollTo(0, 0);

    const mainTextOnBg = useCssVariable("--clr-txt-onBg");

    return (
        <footer className="footer">
            <button onClick={handleScrollToTop}>
                <DoubleUp />
            </button>
            <em>Hadri</em>
            <div className="footer__links-container">
                <a
                    href="https://www.linkedin.com/in/hadrien-smet-b80022207/"
                    target="_blank"
                    id="footer-linkedin"
                    className="footer__link-container"
                    aria-label="Link to my linkedIn"
                >
                    <Linkedin
                        dynamicClass="active"
                        size={48}
                        color="#0172b1"
                    />
                    <Linkedin size={48} color={mainTextOnBg} />
                </a>
                <a
                    href="https://github.com/HadrienSmet"
                    target="_blank"
                    id="footer-github"
                    className="footer__link-container"
                    aria-label="Link to my github"
                >
                    <Github
                        dynamicClass="active"
                        size={48}
                        color="#0076b2"
                    />
                    <Github
                        size={48}
                        color={mainTextOnBg}
                    />
                </a>
                <a
                    href="mailto:hadriensmet96@gmail.com"
                    target="_blank"
                    id="footer-mail"
                    className="footer__link-container"
                    aria-label="Send me a mail from you mailbox"
                >
                    <Envelope
                        dynamicClass="active"
                        size={48}
                        color="#df574b"
                    />
                    <Envelope
                        size={48}
                        color={mainTextOnBg}
                    />
                </a>
            </div>
        </footer>
    );
};
