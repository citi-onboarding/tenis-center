import ButtonComp from "../../components/buttoncomponent";
import { NavbarContainer, NavbarImage, ButtonContainer} from './style';
import { logonavbar } from '../../assets/index';

export const Navbar: React.ElementType=  () =>  {
    return(
     <NavbarContainer>
         <NavbarImage src = { logonavbar }/>
         <ButtonContainer href=""> <ButtonComp text= "Início" color-background= #0476D9 /></ButtonContainer >
         <ButtonContainer href=""> <ButtonComp text= "Projetos"/></ButtonContainer>
         <ButtonContainer href=""> <ButtonComp text= "Serviços"/></ButtonContainer>
         <ButtonContainer href=""> <ButtonComp text= "Parceiros"/></ButtonContainer>
         <ButtonContainer href=""> <ButtonComp text= "Fale Conosco"/></ButtonContainer >
    </NavbarContainer>
 
    ) 
 }

 
