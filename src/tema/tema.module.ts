import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tema } from "./entities/tema.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Tema])], //Permitir que o TypeORM injete o repositório da entidade
    providers: [],
    controllers: [],
    exports: []
})
export class TemaModule {}