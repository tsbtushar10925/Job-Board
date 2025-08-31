import {User} from "./user";
import {Field, ObjectType} from "type-graphql";
import {Role} from "../common/enums/role";

/**
 * Defines user details for candidate
 */
@ObjectType()
export class Candidate extends User {
    @Field()
    bio: string;

    @Field(() => [String])
    skills: string[];

    constructor(firstName: string, lastName: string, email: string, password: string, bio: string, skills: string[]) {
        super(firstName, lastName, email, password);
        this.role = Role.CANDIDATE;
        this.bio = bio;
        this.skills = skills;
    }
}