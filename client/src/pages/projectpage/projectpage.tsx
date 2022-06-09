import React, { useState , useEffect } from "react";
import Button  from "../../components/buttoncomponent"
import {ProjectContainer, Title, Contrast, Text, Image, BackgroundImage, Arrow, LeftPart, ButtonDiv} from "./style"
import { contorno, seta } from "../../assets"
import axios from 'axios'

type ProjectProps = {
    id: number;
    image: string;
    title: string;
    textDescription: string;
}

const Project: React.ElementType = () => {

    const[ProjectInfo, setProjectInfo] = useState<ProjectProps>()

    async function loadProjectInfo() {
        const res = await axios.get('http://localhost:3001/project');
        const { data } = res;
        console.log(data[0]);
        setProjectInfo(data[0]);
    }

    useEffect(() => {
        loadProjectInfo();
    },[])

    return (
        <ProjectContainer>
                <LeftPart>
                    <Title> Conheça nosso projeto <Contrast> Todos pela vida </Contrast></Title> 
                    <Text>{ProjectInfo?.textDescription}</Text>
                    <ButtonDiv>
                    <Button text={ProjectInfo?.title} width="318.11px" height="54.46px" onClick backgroundColor="#0476D9" hoverBackground="#0262B6" fontWeight="500" style={{marginLeft: "123.96px"}}> <Arrow src = {seta}></Arrow> </Button>
                    </ButtonDiv>
                </LeftPart>
                <BackgroundImage src= {contorno}></BackgroundImage> 
                <Image src={ProjectInfo?.image}></Image>                        
        </ProjectContainer>
            
    )
}


export default Project;