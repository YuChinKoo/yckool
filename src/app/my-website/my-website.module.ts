import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MyWebsiteRoutingModule } from './my-website-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MyWebsiteComponent } from './my-website.component';

@NgModule({
  declarations: [
    HomePageComponent,
    ProjectsPageComponent,
    ResumePageComponent,
    ContactsPageComponent,
    ModalDialogComponent,
    HeaderComponent,
    FooterComponent,
    MyWebsiteComponent
  ],
  imports: [
    CommonModule,
    MyWebsiteRoutingModule,
    MatToolbarModule
  ]
})
export class MyWebsiteModule { }

