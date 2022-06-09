import ButtonComp from "../../components/buttoncomponent";
import { NavbarContainer, NavbarImage, ButtonContainer} from './style';
import { logonavbar } from '../../assets/index';

export const Navbar: React.ElementType=  () =>  {
    return(
     <NavbarContainer>
         <NavbarImage src = { logonavbar }/>
         <ButtonContainer href=""> <ButtonComp text= "Início" backgroundColor= "#0476D9" /></ButtonContainer >
         <ButtonContainer href=""> <ButtonComp text= "Projetos" fontWeight={500}/></ButtonContainer>
         <ButtonContainer href=""> <ButtonComp text= "Serviços" fontWeight={500}/></ButtonContainer>
         <ButtonContainer href=""> <ButtonComp text= "Parceiros" fontWeight={500}/></ButtonContainer>
         <ButtonContainer href=""> <ButtonComp text= "Fale Conosco" fontWeight={500}/></ButtonContainer >
    </NavbarContainer>
 
    ) 
 }

 
