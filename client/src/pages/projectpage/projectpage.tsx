import React, { useState , useEffect } from "react";
import Button  from "../../components/buttoncomponent"
import {ProjectContainer, Title, Contrast, Text, Image, BackgroundImage} from "./style"
import { contorno } from "../../assets"
import axios from 'axios'

type ProjectProps = {
    id: number;
    image: string;
    title: string;
    textDescription: string;
}

const Project: React.ElementType = () => {

    const[ProjectInfo, setProjectInfo] = useState<ProjectProps[]>([])

    async function loadProjectInfo() {
        const res = await axios.get('http://localhost:3001/project');
        const { data } = res;
        console.log(data);
        setProjectInfo(data);
    }

    useEffect(() => {
        loadProjectInfo();
    },[])

    return (
        <ProjectContainer>
            <Title> Conheça nosso projeto <Contrast> Todos pela vida </Contrast></Title> 
            {ProjectInfo?(({ProjectInfo.image, ProjectInfo.title, ProjectInfo.textDescription}) => (
                        <Text>{ProjectInfo.textDescription}</Text>
                        <Button text={ProjectInfo.title} width="318.11px" height="54.46px" onClick children backgroundColor="#0476D9" hoverBackground="#0262B6" fontWeight="500"/>
                        <Image>{ProjectInfo.image}<Image/>                       
                      ))} 
            <BackgroundImage> src= {contorno} </BackgroundImage>
        </ProjectContainer>
            
    )
}


export default Project;