import { useElementVisibility } from "@/hooks";

import { ContactForm } from "./form";
import { ContactHeader } from "./header";
import "./sectionContact.scss";

export const SectionContact = () => {
    const { elementRef } = useElementVisibility({});

    return (
        <section id="contact" className="contact">
            <img className="contact-background" src="images/backgrounds/grunge-pattern.webp" />
            <div className="contact-content"  ref={elementRef}>
                <ContactHeader />
                <ContactForm />
            </div>
        </section>
    );
};
