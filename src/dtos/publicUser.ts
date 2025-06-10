import { User } from '../models/user.entity';

export class PublicUserDTO {
    id: number;
    username: string;
    profile_picture_url: string;
    firstname: string;
    lastname: string;
    birthdate: string;

    constructor(user: User) {
        this.id = user.id;
        this.username = user.username;
        this.profile_picture_url = user.profile_picture_url;
        this.firstname = user.firstname;
        this.lastname = user.lastname;
        this.birthdate = user.birthdate;
    }
}