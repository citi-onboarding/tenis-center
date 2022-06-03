import React, { ReactHTMLElement } from "react"
import { ButtonComp, ButtonText } from "./style"


type ButtonProps = {
    text: string;
    OnClick: ()=> void;
    children?: React.ReactNode;
    width: string;
    height: string;
    color?: string;
    backgroundColor?: string;
}

const Button: React.ElementType = ({ text, OnClick, children, width, height, backgroundColor}: ButtonProps) => {
    return (
        <ButtonComp onClick={OnClick} style={{ width, height, backgroundColor}}>
        <ButtonText>{text}</ButtonText>
            {children}
        </ButtonComp>
    );
}


export default Button;