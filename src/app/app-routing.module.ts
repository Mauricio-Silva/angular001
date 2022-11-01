import { TasksComponent } from './core/components/tasks/tasks.component';
import { UsersComponent } from './core/components/users/users.component';
import { StartComponent } from './core/components/start/start.component';
import { StudentDetailComponent } from './core/components/students/detail-page/student-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './core/components/heroes/heroes.component';
import { StudentComponent } from './core/components/students/students.component';


const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'students', component: StudentComponent },
  { path: 'students/:id', component: StudentDetailComponent },
  { path: 'users', component: UsersComponent },
  { path: 'tasks', component: TasksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
