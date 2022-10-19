import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { Test } from "./test";
import { DATABASE } from './test.repository';


@Injectable({
  providedIn: 'root',
})
export class TestService {


    public findAll(): Observable<Test[]> {
        return of(DATABASE);
    }


    public listAll(): Test[] {
        let testsList: Test[] = [];
        this.findAll().subscribe(tests => testsList = tests);
        return testsList;
    }


    public add(name: string): void {
        let testsIds: number[] = []
        this.findAll().subscribe(tests => testsIds = tests.map(test => test.id));
        const max_student_id = Math.max(...testsIds);
        let test = new Test(max_student_id + 1, name);
        DATABASE.push(test);
        console.log(DATABASE);
    }


    public remove(): void {
        if (DATABASE.length > 0) {
            DATABASE.pop()
        }
    }
}