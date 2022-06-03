import React from 'react';
import {PartnersBackgroud, Title, Blue} from "./styles"


type CardProps = {
    image: string;
};

export const Partners: React.ElementType = ({image}: CardProps) => {
    return (
        <PartnersBackgroud>
            <Title>Nossos <Blue>parceiros</Blue></Title>
        </PartnersBackgroud>
    );
}