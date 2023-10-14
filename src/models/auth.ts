import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('auth')
class Auth{
    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    login: string;

    @Column()
    token: string;

    @Column()
    dateLogin: Date;

}

export default Auth;