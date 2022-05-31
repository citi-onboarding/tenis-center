import { Request, Response } from 'express';
import { Project } from '@models/Project';
import { Citi, Crud } from '../global'

export default class ProjectController implements Crud {

    async create(request: Request, response: Response){
        const {title, textDescription, image} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(title, textDescription, image);
        if(isAnyUndefined) return response.status(400).send();

        const newProject = { title, textDescription, image };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Project, newProject);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Project);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: ProjectFound, message } = await Citi.findByID(Project, id); 
           
        if(!ProjectFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Project, ProjectFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {title, textDescription, image } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(title, textDescription, image, id);
        if(isAnyUndefined) return response.status(400).send();

        const ProjectWithUpdatedValues = { title, textDescription, image };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Project, id, ProjectWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

}