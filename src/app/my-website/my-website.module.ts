import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MyWebsiteRoutingModule } from './my-website-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MyWebsiteComponent } from './my-website.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FrontSectionComponent } from '../components/front-section/front-section.component';
import { CommandPromptComponent } from './command-prompt/command-prompt.component';
import { ConsoleHeaderComponent } from '../components/console-header/console-header.component';

@NgModule({
  declarations: [
    HomePageComponent,
    FooterComponent,
    MyWebsiteComponent,
    FrontSectionComponent,
    CommandPromptComponent,
    ConsoleHeaderComponent
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

