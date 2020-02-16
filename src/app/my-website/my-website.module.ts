import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';

@NgModule({
  declarations: [HomePageComponent, ProjectsPageComponent, ResumePageComponent, ContactsPageComponent],
  imports: [
    CommonModule
  ]
})
export class MyWebsiteModule { }

