import Button from "./Button";

import React from "react";

interface ModalProps {
    state: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

function Modal(props: ModalProps) {
    if (!props.state) return null

    return <div className="z-30 w-screen h-screen p-4 bg-black/75 fixed top-0 left-0">
        <div className="w-full h-auto bg-(--bg) rounded-2xl flex flex-col p-4 gap-2">
            {props.children}
            <Button onClick={props.onClose} type="button" theme="primary">Back</Button>
        </div>
    </div>
}

export default Modal;