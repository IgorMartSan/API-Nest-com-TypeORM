import { Column, Cursor, Entity, PrimaryGeneratedColumn } from "typeorm";

//modelar a entrada de dados, exemplo o controler vai receber isso, mas ele so vai pegar o que esta no dto
@Entity('courses') // nome da tabela
export class Course {
    @PrimaryGeneratedColumn()//chave primária
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
}