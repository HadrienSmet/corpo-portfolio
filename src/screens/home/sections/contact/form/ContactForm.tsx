import {
    useRef,
    useState,
    useEffect,
    RefObject,
} from "react";

import { GradientButton } from "@/components";

import "./contactForm.scss";
import { useTranslation } from "react-i18next";

const useInputs = () => {
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");

    const nameLabelRef = useRef<HTMLLabelElement | null>(null);
    const mailLabelRef = useRef<HTMLLabelElement | null>(null);
    const textLabelRef = useRef<HTMLLabelElement | null>(null);

    const classManager = (
        inputValue: string,
        labelRef: RefObject<HTMLLabelElement | null>
    ) => {
        if (inputValue !== "") {
            labelRef.current?.classList.add("fill");
        } else {
            labelRef.current?.classList.remove("fill");
        }
    };
    useEffect(() => {
        classManager(message, textLabelRef);
    }, [message]);
    useEffect(() => {
        classManager(mail, mailLabelRef);
    }, [mail]);
    useEffect(() => {
        classManager(name, nameLabelRef);
    }, [name]);

    return ({
        mail,
        message,
        name,
        nameLabelRef,
        mailLabelRef,
        setMail,
        setMessage,
        setName,
        textLabelRef,
    });
};
export const ContactForm = () => {
    const {
        mail,
        message,
        name,
        nameLabelRef,
        mailLabelRef,
        setMail,
        setMessage,
        setName,
        textLabelRef,
    } = useInputs();
    const { t } = useTranslation();

    return (
        <form className="contact-form">
            <div className="contact-form__name-division">
                <input
                    id="from_name"
                    value={name}
                    type="text"
                    name="from_name"
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="from_name" ref={nameLabelRef}>
                    {t("contact.inputs.name")}
                </label>
            </div>
            <div className="contact-form__adress-division">
                <input
                    id="email_id"
                    value={mail}
                    type="email"
                    name="email_id"
                    onChange={(e) => setMail(e.target.value)}
                />
                <label htmlFor="email_id" ref={mailLabelRef}>
                    {t("contact.inputs.email")}
                </label>
            </div>
            <div className="contact-form__mail-division">
                <textarea
                    id="message"
                    value={message}
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                />
                <label htmlFor="message" ref={textLabelRef}>
                    {t("contact.inputs.message")}
                </label>
            </div>
            <GradientButton
                label={t("contact.inputs.submit")}
                onClick={() => console.log("Send")}
            />
        </form>
    );
};
