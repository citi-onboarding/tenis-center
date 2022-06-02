import React from "react";
import { CardContainer, CardImage } from './styles';
import { Photo } from './../../como-otimizar-imagens-web-internet1.jpg';

type CardProps = {

    image: string;
};

export const Card: React.ElementType = ({ image }: CardProps) => {
   return(
    <CardContainer>
    <CardImage src = { Photo }/>

   </CardContainer>

   ) 
}