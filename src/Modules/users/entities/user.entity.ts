import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    fistName!:string; 

    @Column()
    lastName!:string;
    
    @Column()
    gender!:string;
    
    @Column()
    email!:string;
    
    @Column()
    password!:string;
}
