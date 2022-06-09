import ButtonComp from "../../components/buttoncomponent";
import { NavbarContainer, ButtonContainer} from './style';

export const Navbar: React.ElementType=  () =>  {
    return(
     <NavbarContainer>
         <ButtonContainer href=""> <ButtonComp text= "Início"/></ButtonContainer >
         <ButtonContainer href=""> <ButtonComp text= "Projetos"/></ButtonContainer>
         <ButtonContainer href=""> <ButtonComp text= "Serviços"/></ButtonContainer>
         <ButtonContainer href=""> <ButtonComp text= "Parceiros"/></ButtonContainer>
         <ButtonContainer href=""> <ButtonComp text= "Fale Conosco"/></ButtonContainer >
    </NavbarContainer>
 
    ) 
 }
 
