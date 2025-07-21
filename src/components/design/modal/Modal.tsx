import { PropsWithChildren, useMemo } from "react";
import { createPortal } from "react-dom";

import "./modal.scss"

export const MODAL_TYPES = {
    bottom: "bottom",
    center: "full",
    left: "left",
    right: "right",
    top: "top",
} as const;
type ModalType = typeof MODAL_TYPES[keyof typeof MODAL_TYPES];
type ModalProps =
    & {
        readonly close: () => void;
        readonly isOpen: boolean;
        readonly type?: ModalType;
    }
    & PropsWithChildren;
const ModalChild = ({ children, close, isOpen, type = MODAL_TYPES.center }: ModalProps) => {
    const flexStyle = useMemo(() => {
        switch (type) {
            case MODAL_TYPES.bottom:
                return ({
                    alignItems: "flex-end",
                });
            case MODAL_TYPES.center:
                return ({
                    alignItems: "center",
                    justifyContent: "center",
                });
            case MODAL_TYPES.left:
                return ({
                    justifyContent: "flex-start",
                });
            case MODAL_TYPES.right:
                return ({
                    justifyContent: "flex-end",
                });
            case MODAL_TYPES.top:
                return ({
                    alignItems: "flex-start",
                });
        }
    }, [type]);

    return (
        <div className={`modal ${isOpen ? "opened" : "closed"}`} style={flexStyle}>
            <div className="modal-backdrop" onClick={close} />
            <div className="modal-content">
                {children}
            </div>
        </div>
    );
};
export const Modal = ((props: ModalProps) => {
    const container = document.querySelector("#portal");

    if (!container) {
        return (null);
    }

    return (createPortal(<ModalChild {...props} />, container));
});
