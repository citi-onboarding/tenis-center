import ButtonComp from "../../components/buttoncomponent";
import { NavbarContainer, NavbarImage, ButtonContainer, LastButton} from './style';
import { logonavbar } from '../../assets/index';

export const Navbar: React.ElementType=  () =>  {
    return(
     <NavbarContainer>
         <NavbarImage src = { logonavbar }/>
         <ButtonContainer href=""> <ButtonComp text= "Início" fontWeight={500}/></ButtonContainer >
         <ButtonContainer href="#project"> <ButtonComp text= "Projetos" fontWeight={500}/></ButtonContainer>
         <ButtonContainer href="#service"> <ButtonComp text= "Serviços" fontWeight={500}/></ButtonContainer>
         <ButtonContainer href="#partners"> <ButtonComp text= "Parceiros" fontWeight={500}/></ButtonContainer>
         <LastButton href="https://wa.me/55979166803/?text=Oi,%20quero%20fazer%20uma%20reserva!"> <ButtonComp text= "Fale Conosco" backgroundColor= "#0476D9" height={44} width= {171} fontWeight={500}/></LastButton >
    </NavbarContainer>
 
    ) 
 }

 
