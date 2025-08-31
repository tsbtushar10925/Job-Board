import {User} from "./user";
import {ObjectType} from "type-graphql";
import {Role} from "../common/enums/role";

/**
 * Defines user details for recruiter
 */
@ObjectType()
export class Recruiter extends User {

    constructor(firstName: string, lastName: string, email: string, password: string) {
        super(firstName, lastName, email, password);
        this.role = Role.RECRUITER;
    }
}