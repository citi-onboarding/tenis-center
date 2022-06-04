import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class Partners {

    @PrimaryGeneratedColumn ()
    id: number

    @Column()
    image: string

}