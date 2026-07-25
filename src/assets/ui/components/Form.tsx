import Button from "./Button";
import React from "react";

interface InputProps {
    type:"text"|"email"|"textarea";
    required:boolean;
    placeholder?:string;
    name:string;
    onChange?:(e: React.ChangeEvent<HTMLInputElement>)=>void;
}

interface FormProps {
    onSubmit:(e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
    children:React.ReactNode;
}

function Input(props:InputProps) {
    const inputStyle = `w-full h-12 shadow-2xl border-2 border-(--primary) rounded-2xl text-black p-2`
    
    if(props.type=="textarea") {
        return <textarea name={props.name} placeholder={props.placeholder} required={props.required} className={inputStyle}/>
    }

    return <input onChange={props.onChange} min={0} type={props.type} name={props.name} placeholder={props.placeholder} accept="image/*" required={props.required} className={inputStyle}/>
}

function Form(props:FormProps) {
    return <form onSubmit={props.onSubmit} method="post" className="center flex-col gap-4 w-full">
        {props.children}
        <Button type="submit" theme="primary">Submit</Button>
    </form>
}

Form.Input = Input;
export default Form;