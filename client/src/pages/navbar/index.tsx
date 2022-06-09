import ButtonComp from "../../components/buttoncomponent";
import { NavbarContainer, ButtonContainer} from './style';

export const Navbar: React.ElementType=  () =>  {
    return(
     <NavbarContainer>
         <ButtonContainer href=""> <ButtonComp title= "Início"/></ButtonContainer >
         <ButtonContainer href=""> <ButtonComp title= "Projetos"/></ButtonContainer>
         <ButtonContainer href=""> <ButtonComp title= "Serviços"/></ButtonContainer>
         <ButtonContainer href=""> <ButtonComp title= "Parceiros"/></ButtonContainer>
         <ButtonContainer href=""> <ButtonComp title= "Fale Conosco"/></ButtonContainer >
    </NavbarContainer>
 
    ) 
 }
 
