import { User } from "../models/user"

/**
 * 
 * @param {like<User>} localhostUser 
 * @returns {User}
 */
export const localhostUserToModel = ( localhostUser ) => {

    const{
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActivate,
        last_name,
    } = localhostUser;

    return new User({
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isActivate,
        lastName: last_name,
    });
}