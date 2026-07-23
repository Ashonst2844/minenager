import React from "react";
import * as ReactDOM from "react-router-dom"

interface ButtonProps {
    type:"route"|"button"|"link";
    theme:"primary"|"secondary"|"warning";
    w?:string;
    h?:string;
    target?:string;
    onClick?:()=>void;
    children:React.ReactNode;
    style?:React.CSSProperties
}
function Button(props: ButtonProps) {
    const style = {
        width:props.w?props.w:"100%",
        minWidth:props.w?props.w:"100%",
        height:props.h?props.h:"60px",
        color:props.theme=="primary"?"white":"(--text)",
        backgroundColor:props.theme=="warning"?"var(--warning)":props.theme=="secondary"?"var(--secondary)":"var(--primary)", 
        ...props.style
    }
    const className = `center hover:brightness-110 rounded-2xl p-2`

    return props.type=="route"?
    
    <ReactDOM.Link to={props.target} className={className} style={style}>
        {props.children}
    </ReactDOM.Link> 
    : 
    <a href={props.target} target={props.type=="link"?"_blank":null} className={className} style={style}>
        {props.children}
    </a>
} export default Button;