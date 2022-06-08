import React from 'react'
import { FooterContainer, FooterImage, FooterDescription, FooterLinks, FooterDivider} from './styles';
import { logotennis } from '../../assets/index';
import { insta } from '../../assets/index';
import { whats } from '../../assets/index';
import { link } from '../../assets/index';

export const Footer: React.ElementType=  () =>  {
   return(
    <FooterContainer>
    <FooterImage src = { logotennis }/>
    <FooterDivider/>
    <FooterDescription>descrição aqui</FooterDescription>
    <FooterLinks src = { insta }/>
    <FooterLinks src = { whats }/>
    <FooterLinks src = { link }/>

   </FooterContainer>

   ) 
}
