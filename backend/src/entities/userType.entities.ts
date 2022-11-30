import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class UserType extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 50 })
    name: string;
    
}