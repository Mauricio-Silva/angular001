import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { MatTableDataSource } from '@angular/material/table';
// cSpell:disable

const STUDENTSLIST: Student[] = [
  new Student(1, 'Mauricio', 22, 7, 7.5),
  new Student(2, 'Caio', 21, 7.8, 8.5),
  new Student(3, 'Toshiba', 23, 8, 8),
  new Student(4, 'Luiz', 19, 9, 8.5),
  new Student(5, 'Douglas', 23, 10, 7.5),
  new Student(6, 'Sthefany', 22, 9, 7),
  new Student(7, 'Vinnicius', 21, 6.5, 8),
  new Student(8, 'Alexandre', 21, 7, 7.5),
  new Student(9, 'Victor', 23, 7, 5.5),
  new Student(10, 'Geovanny', 20, 6, 6.5),
]


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  // dataSource = [...STUDENTSLIST];
  columns = [
    { attribute: 'id', name: 'ID', value: (element: Student) => `${element.id}` },
    { attribute: 'name', name: 'Nome', value: (element: Student) => `${element.name}` },
    { attribute: 'email', name: 'Email', value: (element: Student) => `${element.email}` },
    { attribute: 'age', name: 'Idade', value: (element: Student) => `${element.age}` },
    { attribute: 'note1', name: 'Nota1', value: (element: Student) => `${element.note1}` },
    { attribute: 'note2', name: 'Nota2', value: (element: Student) => `${element.note2}` },
    { attribute: 'average', name: 'Média', value: (element: Student) => `${element.average}` },
    { attribute: 'status', name: 'Situação', value: (element: Student) => `${element.status}` },
  ];
  displayedColumns = this.columns.map(student => student.attribute);
  dataSource = new MatTableDataSource(STUDENTSLIST);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addStudent() {}
  removeStudent() {}



  constructor() { }

  ngOnInit(): void {
  }
}

