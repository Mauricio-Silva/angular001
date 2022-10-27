import { Task } from './task';

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    status: boolean;
    confirmationToken: string;
    salt: string;
    createAt: Date;
    updateAt: Date;
    task: Task;

    constructor(id: string, name: string, email: string, password: string, status: boolean, confirmationToken: string, salt: string, createAt: Date, updateAt: Date, task: Task) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.status = status;
        this.confirmationToken = confirmationToken;
        this.salt = salt;
        this.createAt = createAt;
        this.updateAt = updateAt;
        this.task = task;
    }
}