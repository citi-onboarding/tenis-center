import React from 'react'
import { FooterContainer, FooterImage, FooterDescription, FooterLinks, FooterDivider, FooterMadewith} from './styles';
import { logotennis } from '../../assets/index';
import { insta } from '../../assets/index';
import { whats } from '../../assets/index';
import { link } from '../../assets/index';

export const Footer: React.ElementType=  () =>  {
   return(
    <FooterContainer>
    <FooterImage src = { logotennis }/>
    <FooterDivider/>
    <FooterDescription>Descrição do espaço</FooterDescription>
    <FooterLinks src = { insta }/>
    <FooterLinks src = { whats }/>
    <FooterLinks src = { link }/>
    <FooterMadewith> Made with
                {' '}
                <strong>&lt; &#x0002F; &gt;</strong>
                {' '}
                and
                {' '}
                <strong>&hearts;</strong>
                {' '}
                by CITi</FooterMadewith>

   </FooterContainer>

   ) 
}
