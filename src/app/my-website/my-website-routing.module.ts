import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MyWebsiteRoutingConstants } from './my-website-routing-constants';
import { MyWebsiteComponent } from './my-website.component';

const routes: Routes = [
  {
    path: MyWebsiteRoutingConstants.homePage,
    component: MyWebsiteComponent,
    children: [{
        path: MyWebsiteRoutingConstants.homePage,
        component: HomePageComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyWebsiteRoutingModule { }
