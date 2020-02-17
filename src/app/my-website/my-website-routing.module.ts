import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { MyWebsiteRoutingConstants } from './my-website-routing-constants';
import { ResumePageComponent } from './resume-page/resume-page.component';

const routes: Routes = [
  {
    path: MyWebsiteRoutingConstants.homePage,
    component: HomePageComponent
  },
  {
    path: MyWebsiteRoutingConstants.projectsPage,
    component: ProjectsPageComponent
  },
  {
    path: MyWebsiteRoutingConstants.resumePage,
    component: ResumePageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class MyWebsiteRoutingModule { }
