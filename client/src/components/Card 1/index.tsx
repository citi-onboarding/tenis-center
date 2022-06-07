import React from 'react';
import { CardContainer, BlueGradient, GreenGradient, CardImage, CardText, CardTitle } from './styles';

type CardProps = {
    img: string;
    title: string;
    description: string;
    blue: boolean;
};

export const Card: React.ElementType = ({img, title, description, blue}: CardProps) => {
    return (
        <CardContainer>
            <CardImage src={img}/>
            {blue? <BlueGradient/>: <GreenGradient/>}
            <CardTitle>{title}</CardTitle>
            <CardText>{description}</CardText>
        </CardContainer>
    );
}