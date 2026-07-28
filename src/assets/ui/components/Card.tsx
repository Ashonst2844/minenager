import Button from "./Button";
import Image from "./Image";
import Modal from "./Modal";

interface CardProps {
    use:"tasks"|"todo"|undefined;
    hasModal:boolean
    children: React.ReactNode;
    [key: string]: string | number | boolean | React.ReactNode;
}
import React from "react"

function ButtonGroup() {
    return <div className="grid grid-cols-2 gap-2">
        <Button type="button" theme="warning">Delete</Button>
        <Button type="button" theme="primary">Finish</Button>
    </div>
}
function Card({use, hasModal, children, ...rest}:CardProps) {
    const [state,setState]=React.useState<boolean>(false)
    console.log(rest)

    return <div className="bg-white shadow-2xl h-50 rounded-2xl p-2 center flex-col">
        <div className="w-full h-[80%] flex items-center flex-col text-center justify-around relative">
            {children}
        </div>
        {hasModal ? <Button type="button" theme="primary" h="20%" onClick={()=>setState(true)}>
            <Image type="icon" url="burger-bar" w="20%"/>
        </Button> : ""
        }

        {use=="tasks"? 
        <Modal state={state} onClose={()=>setState(false)}>
            <div className="my-2 flex gap-2 flex-col">
                <p>{`${rest.tasks} - ${rest.subject}`}</p>
                <p>{`For ${rest.deadline}`}</p>
                <p>{`From Mr/Mrs. ${rest.lecturer}`}</p>
                <h2>{rest.status?"Done":"Undone"}</h2>
                <ButtonGroup/>
            </div>
        </Modal>
        :use=="todo"?
        <Modal state={state} onClose={()=>setState(false)}>
            <div className="my-2 flex gap-2 flex-col">
                <p>{`${rest.tasks}`}</p>
                <p>{`For ${rest.deadline}`}</p>
                <h2>{rest.status?"Done":"Undone"}</h2>
                <ButtonGroup/>
            </div>
        </Modal>
        : ""}
    </div>
} export default Card