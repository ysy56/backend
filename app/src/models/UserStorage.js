"use strict";

class UserStorage {
    static #users = { // private var
        id: ['first', 'duck', 'you'],
        pw: ['1234', '1111', '00'],
        name: ['팀장', '우리', '너'],
    };

    static getUsers(...fields) {
        const users = this.#users; // #users 객체 자체
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            } 
            return newUsers;
        }, {});
        return;
    }
}

module.exports = UserStorage;