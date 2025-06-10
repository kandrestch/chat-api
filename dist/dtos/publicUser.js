"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicUserDTO = void 0;
class PublicUserDTO {
    constructor(user) {
        this.id = user.id;
        this.username = user.username;
        this.profile_picture_url = user.profile_picture_url;
        this.firstname = user.firstname;
        this.lastname = user.lastname;
        this.birthdate = user.birthdate;
    }
}
exports.PublicUserDTO = PublicUserDTO;
