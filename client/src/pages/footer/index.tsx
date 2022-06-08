import React from 'react'
import { FooterContainer, FooterImage, FooterDescription } from './styles';
import { logotennis } from '../../assets/index';


export const Footer: React.ElementType=  () =>  {
   return(
    <FooterContainer>
    <FooterImage src = { logotennis }/>
    <FooterDescription>descrição aqui</FooterDescription>
   </FooterContainer>

   ) 
}
