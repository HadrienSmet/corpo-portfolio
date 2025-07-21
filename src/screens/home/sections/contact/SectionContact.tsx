import { useElementVisibility } from "@/hooks";

import { ContactForm } from "./form";
import { ContactHeader } from "./header";
import "./sectionContact.scss";

export const SectionContact = () => {
    const { elementRef } = useElementVisibility({});

    return (
        <section id="contact" className="contact">
            <div className="contact-content"  ref={elementRef}>
                <ContactHeader />
                <ContactForm />
            </div>
        </section>
    );
};
