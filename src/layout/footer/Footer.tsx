import { DoubleUp, Envelope, Github, Linkedin } from "@/assets";
import { useCssVariable } from "@/hooks";

import "./footer.scss";

const ICON_SIZE = 48 as const;
export const Footer = () => {
    const handleScrollToTop = () => window.scrollTo(0, 0);

    const mainTextOnBg = useCssVariable("--clr-txt-onBg");
    const defaultIconProps = {
        color: mainTextOnBg,
        size: ICON_SIZE,
    } as const;

    return (
        <footer className="footer">
            <button
                className="button-styleless"
                onClick={handleScrollToTop}
            >
                <DoubleUp {...defaultIconProps} />
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
                    <Linkedin {...defaultIconProps} />
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
                    <Github {...defaultIconProps} />
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
                    <Envelope {...defaultIconProps} />
                </a>
            </div>
        </footer>
    );
};
