import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";


// Atraves da notation @Endity estamos mapeando a classe `tema` como um entidade do nosso banco de dados
@Entity({name: "tb_temas"})
export class Tema {

    @PrimaryGeneratedColumn()
    id : number;

    @IsNotEmpty()// @Atraves dessa notation do `class validation` podemos fazer verificacoes de dados
    @Column({length : 255, nullable : false})
    descricao:string;

     @OneToMany(() => Postagem, (postagem) => postagem.tema)
    postagem: Postagem[]

}