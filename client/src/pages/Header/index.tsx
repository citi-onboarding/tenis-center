import React from "react"
import { ParentDiv,  BackgroundImage, MainTitle, HeaderDescription, TextHolder, DownArrow, NullDiv } from "./styles";
import { Background_Header, ArrowHeader } from '../../assets';

type HeaderTennisProps = {

};

export const HeaderTennis: React.ElementType = ({}: HeaderTennisProps) => {
    return (
        <ParentDiv>
            <BackgroundImage src={Background_Header}/>
            <TextHolder>
                <MainTitle>Lorem Ipsum Dolor</MainTitle>
                <HeaderDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus fermentum adipiscing elementum in placerat orci tellus vel. Integer quam mattis aliquam urna, in amet.</HeaderDescription>
                <HeaderDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus fermentum adipiscing elementum in placerat orci tellus vel.</HeaderDescription>
            </TextHolder>
                <a href="#service"><DownArrow src={ArrowHeader}/></a>
                <NullDiv id="service"></NullDiv>  
        </ParentDiv>
    );
}