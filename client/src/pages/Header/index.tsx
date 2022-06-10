import React from "react"
import { ParentDiv,  BackgroundImage, MainTitle, HeaderDescription, TextHolder, DownArrow, NullDiv, ArrowLeft, ArrowRight, Anchor, ArrowHolder } from "./styles";
import { Background_Header, ArrowHeader } from '../../assets';
import { Navbar } from '../navbar';

type HeaderTennisProps = {

};


export const HeaderTennis: React.ElementType = ({}: HeaderTennisProps) => {
    
    function ChangeColor(){
        console.log("Salve.")
    }
    
    return (
        <ParentDiv>
            <Navbar/>
            <BackgroundImage src={Background_Header}/>
            <TextHolder>
                <MainTitle>Lorem Ipsum Dolor</MainTitle>
                <HeaderDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus fermentum adipiscing elementum in placerat orci tellus vel. Integer quam mattis aliquam urna, in amet.</HeaderDescription>
                <HeaderDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus fermentum adipiscing elementum in placerat orci tellus vel.</HeaderDescription>
            </TextHolder>
                <Anchor href="#service"><ArrowHolder onClick={ChangeColor}><ArrowLeft/><ArrowRight/></ArrowHolder></Anchor>
        </ParentDiv>
    );
}