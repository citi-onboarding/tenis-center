import React, { ReactHTMLElement } from "react"
import { ButtonComp, ButtonText, Children } from "./style"


type ButtonProps = {
    text: string;
    onClick: ()=> void;
    children?: React.ReactNode;
    width: string;
    height: string;
    backgroundColor?: string;
    hoverBackground?: string;
    fontWeight: number;
}

const Button: React.ElementType = ({ text, onClick, children, width, height, backgroundColor, hoverBackground, fontWeight}: ButtonProps) => {
    return (
        <ButtonComp onClick={onClick} style={{ width, height, fontWeight}} backgroundColor={backgroundColor} hoverBackground={hoverBackground}>
        <ButtonText>{text}</ButtonText>
        <Children> {children} </Children>
        </ButtonComp>
    );
}


export default Button;