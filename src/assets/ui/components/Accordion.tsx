import Button from "./Button";

import React from "react"

interface AccordionProps {
    title:string;
    children:React.ReactNode;
}

function Accordion(props: AccordionProps) {
    const [show,setShow] = React.useState<boolean>(false)

    return <div className="rounded-2xl shadow-2xl bg-white p-2">
        <h1 className="flex text-4xl items-center h-24">{props.title}</h1>
        {show && <div className="my-4 px-4">
            {props.children}
        </div>}
        <Button onClick={()=>!show?setShow(true):setShow(false)} type="button" theme="primary" h="32px">
            Open
        </Button>
    </div>
} export default Accordion;