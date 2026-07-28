import Button from "./Button";
import Image from "./Image";

import React from "react"

interface AccordionProps {
    title:string;
    children:React.ReactNode;
}

function Accordion(props: AccordionProps) {
    const [show,setShow] = React.useState<boolean>(false)

    return <div className="rounded-2xl shadow-2xl bg-white p-2">
        <h2 className="h-16">{props.title}</h2>
        {show && <div className="my-4 px-4">
            {props.children}
        </div>}
        <Button onClick={()=>!show?setShow(true):setShow(false)} type="button" theme="primary" h="32px">
            <Image type="icon" url="caret" w="5%" className={`rotate-${!show?"0":"180"}`}/>
        </Button>
    </div>
} export default Accordion;