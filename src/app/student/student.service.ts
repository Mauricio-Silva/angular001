import { Student } from "./student";


export class StudentService {
    private DATABASE: Student[] = [
        new Student(1, 'Mauricio', 22, 5, 5.7),
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


    public GetAllStudents(): Student[] {
        return this.DATABASE;
    }


    public CreateNewStudent(student: Student): void {
        this.DATABASE.push(student);
        console.log(this.DATABASE);
    }


    public GetStudentById(id: number): Student {
        const student = this.DATABASE.filter(student => student.id === id);
        return student[0];
    }


    public DeleteStudent(id: number): void {
        const studentsIdsList = this.DATABASE.map(student => student.id);
        const index = studentsIdsList.indexOf(id);
        if (index != -1) {
            delete this.DATABASE[index];
        }
    }
}