export class Test {
  public id: number;
  public name: string;
  public email: string;


  constructor(id: number, name: string) { 
    this.id = id;
    this.name = name;
    this.email = name + '@example.com';
  }


  public setId(id: number) {
    this.id = id;
  }
}