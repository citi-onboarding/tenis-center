import React from 'react';
import { CardContainer, BlueGradient, GreenGradient, CardImage, CardText, CardTitle } from './styles';

type CardProps = {
    image: string;
    title: string;
    description: string;
    blue: boolean;
};

export const Card: React.ElementType = ({image, title, description, blue}: CardProps) => {
    return (
        <CardContainer>
            <CardImage src={image}/>
            {blue? <BlueGradient/>: <GreenGradient/>}
            <CardTitle>{title}</CardTitle>
            <CardText>{description}</CardText>
        </CardContainer>
    );
}