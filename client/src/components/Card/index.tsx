import React from "react";
import { CardContainer, CardImage } from './styles';
import { Photo } from '../../assets/index';

type CardProps = {

    image: string;
};

export const Card: React.ElementType = ({ image }: CardProps) => {
   return(
    <CardContainer>
    <CardImage src = { image }/>

   </CardContainer>

   ) 
}