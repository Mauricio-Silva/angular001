import { StartComponent } from './core/components/start/start.component';
import { StudentDetailComponent } from './core/components/student-detail/student-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './core/components/heroes/heroes.component';
import { StudentComponent } from './core/components/students/student.component';


const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'students', component: StudentComponent },
  { path: 'students/:id', component: StudentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
