import {Field, ID, ObjectType} from "type-graphql";
import {Role} from "../common/enums/role";

@ObjectType()
export class User {
    @Field(() => ID)
    id!: string;

    @Field()
    firstName!: string;

    @Field()
    lastName: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    role: Role;

    constructor(firstName: string, lastName: string, email: string, password: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}