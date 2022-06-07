import React from 'react'
import { FooterContainer, FooterImage } from './styles';
import { logo-tennis } from '../../assets/index';

export const Footer: React.ElementType=  () =>  {
   return(
    <FooterContainer>
    <FooterImage src = { logo-tennis }/>
    <h1 >
    </h1>
   </FooterContainer>

   ) 
}
