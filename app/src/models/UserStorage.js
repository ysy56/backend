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

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // => id, pw, name
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);
        return { success: true };
    }
}

module.exports = UserStorage;