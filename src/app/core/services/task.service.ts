import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from "../models/task";

const baseUrl: string = 'http://localhost:3000/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) {}


  public create(task: Task): Observable<Task> {
    return this.http.post<Task>(baseUrl, task);
  }


  public findAll(): Observable<Task[]> {
    return this.http.get<Task[]>(baseUrl.concat('/list'));
  }


  public findOneById(id: string): Observable<Task> {
    return this.http.get<Task>(baseUrl.concat('/', id));
  }


  public findOneByDescription(description: string): Observable<Task> {
    return this.http.get<Task>(baseUrl.concat('/description/', description));
  }


  public update(id: string, task: Task): Observable<Task> {
    return this.http.patch<Task>(baseUrl.concat('/', id), task);
  }


  public delete(id: string): Observable<Task> {
    return this.http.delete<Task>(baseUrl.concat('/', id));
  }
}
