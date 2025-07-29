import {
    useRef,
    useState,
    useEffect,
    RefObject,
} from "react";
import { Trans, useTranslation } from "react-i18next";
import { sendForm } from "@emailjs/browser";

import { Check, Report } from "@/assets";
import { GradientButton, Modal, MODAL_TYPES } from "@/components";

import "./contactForm.scss";

const ID = "notification";
type NotifProps = {
    readonly isActive: boolean;
};
const ErrorNotif = ({ isActive }: NotifProps) => {
    const { t } = useTranslation();

    return (
        <div className={`${ID} error${isActive ? " active" : ""}`} id={ID}>
            <Report color="red" size={60} />
            <div className={ID + "-content"}>
                <p className={`${ID}-title`}>{t("contact.notifications.error.title")}</p>
                <Trans
                    i18nKey="contact.notifications.error.message"
                    components={{
                        default: <p />,
                        strong: <strong />,
                    }}
                />
            </div>
        </div>
    );
};
const SuccessNotif = ({ isActive }: NotifProps) => {
    const { t } = useTranslation();

    return (
        <div className={`${ID} success${isActive ? " active" : ""}`} id={ID}>
            <Check color="green" size={60} />
            <div className={ID + "-content"}>
                <p className={`${ID}-title`}>{t("contact.notifications.success.title")}</p>
                <p>{t("contact.notifications.success.message")}</p>
            </div>
        </div>
    );
};

const sleep = async (duration: number) => new Promise(resolve => setTimeout(resolve, duration));
const RESPONSES = {
    success: "success",
    error: "error",
} as const;
type ResponseState = typeof RESPONSES[keyof typeof RESPONSES];
const useForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [responseState, setResponseState] = useState<ResponseState | undefined>(undefined);

    const formRef = useRef<HTMLFormElement>(null);
    const nameLabelRef = useRef<HTMLLabelElement>(null);
    const notificationRef = useRef<HTMLDivElement>(null);
    const mailLabelRef = useRef<HTMLLabelElement>(null);
    const textLabelRef = useRef<HTMLLabelElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (
            !formRef.current ||
            !import.meta.env.VITE_SERVICE_ID ||
            !import.meta.env.VITE_TEMPLATE_ID ||
            !import.meta.env.VITE_PUBLIC_KEY
        ) return;

        setIsLoading(true);

        sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            formRef.current!,
            import.meta.env.VITE_PUBLIC_KEY
        )
            .then(() => {
                setResponseState(RESPONSES.success);

                setMail("");
                setName("");
                setMessage("");
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
                setResponseState(RESPONSES.error);
            });
    };
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
    useEffect(() => {
        if (responseState === undefined) {
            return;
        }

        const closeNotif = async () => {
            await sleep(7000);
            setResponseState(undefined);
        };

        closeNotif();
    }, [responseState]);

    return ({
        formRef,
        isLoading,
        mail,
        message,
        name,
        nameLabelRef,
        notificationRef,
        mailLabelRef,
        responseState,
        sendEmail,
        setMail,
        setMessage,
        setName,
        textLabelRef,
    });
};
export const ContactForm = () => {
    const {
        formRef,
        isLoading,
        mailLabelRef,
        mail,
        message,
        name,
        nameLabelRef,
        notificationRef,
        responseState,
        sendEmail,
        setMail,
        setMessage,
        setName,
        textLabelRef,
    } = useForm();
    const { t } = useTranslation();

    return (
        <form
            className="contact-form"
            ref={formRef}
            onSubmit={sendEmail}
        >
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
                label={isLoading
                    ? "Loading..."
                    : t("contact.inputs.submit")
                }
                type="submit"
            />
            <Modal
                isOpen={false}
                close={() => null}
                type={MODAL_TYPES.right}
            >
                <div
                    className="notification-container"
                    ref={notificationRef}
                >
                    <ErrorNotif isActive={responseState === RESPONSES.error} />
                    <SuccessNotif isActive={responseState === RESPONSES.success} />
                </div>
            </Modal>
        </form>
    );
};
