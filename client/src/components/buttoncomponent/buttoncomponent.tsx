import React, { ReactHTMLElement } from "react"
import { ButtonComp, ButtonText } from "./style"


type ButtonProps = {
    text: string;
    onClick: ()=> void;
    children?: React.ReactNode;
    width: string;
    height: string;
    color?: string;
    backgroundColor?: string;
    hoverBackground?: string;
    fontWeight: number;
}

const Button: React.ElementType = ({ text, onClick, children, width, height, backgroundColor, hoverBackground, fontWeight}: ButtonProps) => {
    return (
        <ButtonComp onClick={onClick} style={{ width, height, fontWeight}} backgroundColor={backgroundColor} hoverBackground={hoverBackground}>
        <ButtonText>{text}</ButtonText>
            {children}
        </ButtonComp>
    );
}


export default Button;