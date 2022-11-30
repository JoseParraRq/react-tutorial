import { Column, CreateDateColumn, Entity,PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity, ManyToOne} from "typeorm";
import { User } from "./user.entities";
import { UserType } from "./userType.entities";

@Entity ()
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column("varchar")
    name:string;
    
    @Column("varchar")
    marca:string;

    @Column("int")
    precio:number;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updateAt:Date;

    @DeleteDateColumn()
    deletedAt:Date;
    
    @ManyToOne( () => User, { nullable: false, eager:true} )
    user: User
}