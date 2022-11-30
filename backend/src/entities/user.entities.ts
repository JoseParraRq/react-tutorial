import { Column, CreateDateColumn, Entity,PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity, ManyToOne} from "typeorm";
import { UserType } from "./userType.entities";

@Entity ()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column("varchar")
    firstName:string;
    
    @Column("varchar")
    surName:string;

    @Column("varchar",{unique:true})
    email:string;
    
    @Column("varchar")
    password:string;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updateAt:Date;

    @DeleteDateColumn()
    deletedAt:Date;
    
    @ManyToOne( () => UserType, { nullable: false, eager:true} )
    userType: UserType
}