import {Injectable} from 'angular2/core';

@Injectable()
export class UserService {
    value = "hello;"
    User = { username: '', terroirs : []}
    getUser() {
        return this.User;
    }
}