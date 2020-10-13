import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MyWebsiteRoutingModule } from './my-website-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MyWebsiteComponent } from './my-website.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContactDialogComponent } from '../components/contact-dialog/contact-dialog.component';
import { AboutSectionComponent } from '../components/about-section/about-section.component';
import { FrontSectionComponent } from '../components/front-section/front-section.component';
import { CommandPromptComponent } from './command-prompt/command-prompt.component';

@NgModule({
  declarations: [
    HomePageComponent,
    ProjectsPageComponent,
    ResumePageComponent,
    HeaderComponent,
    FooterComponent,
    MyWebsiteComponent,
    ContactDialogComponent,
    AboutSectionComponent,
    FrontSectionComponent,
    CommandPromptComponent
  ],
  imports: [
    CommonModule,
    MyWebsiteRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MyWebsiteModule { }

