import { Injectable } from "@angular/core";
import { Student } from "../models/student";
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class StudentService {
    DATABASE: Student[] = [
        new Student(1, 'Mauricio', 22, 5, 5.7),
        new Student(2, 'Caio', 21, 7.8, 8.5),
        new Student(3, 'Toshiba', 23, 8, 8),
        new Student(4, 'Luiz', 19, 9, 8.5),
        new Student(5, 'Douglas', 23, 10, 7.5),
        new Student(6, 'Sthefany', 22, 9, 7),
        new Student(7, 'Vinnicius', 21, 6.5, 8),  
    ];

    constructor() {}


    public getStudentById(id: number): Student {
        return this.DATABASE.filter(student => student.id === id)[0];
    }


    public getAllStudents(): Student[] {
        return this.DATABASE;
    }


    public addStudent(student: Student): Observable<Student[]> {
        this.DATABASE.push(student);
        return of(this.DATABASE);
    }


    public removeStudent(id: number): Observable<Student[]> {
        const studentsIdsList = this.DATABASE.map(student => student.id);
        const index = studentsIdsList.indexOf(id);
        if (index != -1) {
            delete this.DATABASE[index];
        }
        return of(this.DATABASE);
    }


    public getMaximumId(): number {
        const ids = this.DATABASE.map((student) => student.id);
        return Math.max(...ids);
    }
}