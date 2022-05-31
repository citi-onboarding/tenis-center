import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Project{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    textDescription: string

    @Column()
    image: string
}