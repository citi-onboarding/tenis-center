import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class Partners {

    @PrimaryGeneratedColumn ()
    image: string

}