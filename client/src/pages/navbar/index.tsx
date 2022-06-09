import ButtonComp from "../../components/buttoncomponent";
import { NavbarContainer, NavbarImage, ButtonContainer} from './style';
import { logonavbar } from '../../assets/index';

export const Navbar: React.ElementType=  () =>  {
    return(
     <NavbarContainer>
         <NavbarImage src = { logonavbar }/>
         <ButtonContainer href=""> <ButtonComp text= "Início" /></ButtonContainer >
         <ButtonContainer href=""> <ButtonComp text= "Projetos" fontWeight={500}/></ButtonContainer>
         <ButtonContainer href=""> <ButtonComp text= "Serviços" fontWeight={500}/></ButtonContainer>
         <ButtonContainer href=""> <ButtonComp text= "Parceiros" fontWeight={500}/></ButtonContainer>
         <ButtonContainer href=""> <ButtonComp text= "Fale Conosco" backgroundColor= "#0476D9" height={24} width= {115} fontWeight={500}/></ButtonContainer >
    </NavbarContainer>
 
    ) 
 }

 
