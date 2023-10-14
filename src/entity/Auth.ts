import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Auth {
    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    login: string;

    @Column()
    token: string;

    @Column()
    dateLogin: Date;

}
