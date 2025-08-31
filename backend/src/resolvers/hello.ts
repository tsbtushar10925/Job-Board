import {Query, Resolver} from "type-graphql";

/**
 * Basic resolver to test graphql setup
 */
@Resolver()
export class HelloResolver {
    @Query(() => String)
    hello(): string {
        return 'Hello';
    }
}