export class Task {
  id: string;
  description: string;
  status: string;

  constructor(id: string, description: string, status: string) {
    this.id = id;
    this.description = description;
    this.status = status;
  }
}