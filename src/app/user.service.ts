import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './_models/user';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    registerUrl:string ='http://jambopay.herokuapp.com/api/users/register/'

    register(user: User) {
        return this.http.post(this.registerUrl, user);
    }

    
}