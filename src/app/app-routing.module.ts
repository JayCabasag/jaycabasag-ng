import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './core/pages/resume/resume.component';
import { ProjectsComponent } from './core/pages/projects/projects.component';
import { HomeComponent } from './core/pages/home/home.component';

const routes: Routes = [
  { path: '', title: 'jaycabasag', component: HomeComponent },
  { path: 'resume', title: 'jaycabasag-resume', component: ResumeComponent },
  { path: 'projects', title: 'jaycabasag-resume', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
