export class Student {
  public id: number;
  public name: string;
  public email: string;
  public age: number;
  public note1: number;
  public note2: number;
  public average: number;
  public status: string;

  constructor(id: number, name: string, age: number, note1: number, note2: number) { 
    this.id = id;
    this.name = name;
    this.email = name.toLowerCase() + age + '@gmail.com';
    this.age = age;
    this.note1 = note1;
    this.note2 = note2;
    this.average = (note1 + note2) / 2;
    this.status = this.average >= 6 ? 'Aprovado' : 'Reprovado'
  }
}