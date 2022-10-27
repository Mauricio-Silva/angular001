import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";

const baseUrl: string = 'http://localhost:3000/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {}

    public create(user: User): Observable<User> {
        return this.http.post<User>(baseUrl, user)
    }

    public findAll(): Observable<User[]> {
        return this.http.get<User[]>(baseUrl.concat('/list'));
    }

    public findOneById(id: string): Observable<User> {
        return this.http.get<User>(baseUrl.concat('/', id));
    }

    public findOneByEmail(email: string): Observable<User> {
        return this.http.get<User>(baseUrl.concat('/email/', email));
    }

    public update(id: string, user: User): Observable<User> {
        return this.http.patch<User>(baseUrl.concat('/', id), user);
    }

    public delete(id: string): Observable<User> {
        return this.http.delete<User>(baseUrl.concat('/', id));
    }
}

