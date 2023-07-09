import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { ResumeComponent } from './core/pages/resume/resume.component';
import { ProjectsComponent } from './core/pages/projects/projects.component';
import { UserComponent } from './core/services/user/user.component';
import { ProjectComponent } from './core/services/project/project.component';
import { HomeComponent } from './core/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    ButtonComponent,
    ResumeComponent,
    ProjectsComponent,
    UserComponent,
    ProjectComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
