import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyWebsiteRoutingConstants } from '../../my-website/my-website-routing-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public contentBar: string[] = [
    'Home',
    'Projects',
    'Resume',
    'About',
    'Contact'
  ];

  constructor(private _route: Router) { }

  // public onClick(content: string): void {
  //   if (content === 'Home') {this._route.navigateByUrl(`${MyWebsiteRoutingConstants.homePage}`);}
  //   else if (content === 'Projects') {this._route.navigateByUrl(`${MyWebsiteRoutingConstants.projectsPage}`);}
  //   else if (content === 'Resume') {this._route.navigateByUrl(`${MyWebsiteRoutingConstants.resumePage}`);}
  // }

  public onClickHome(): void {
    this._route.navigateByUrl(`${MyWebsiteRoutingConstants.homePage}`);
  }

  public onClickProjects(): void {
    this._route.navigateByUrl(`${MyWebsiteRoutingConstants.projectsPage}`);
  }

  public onClickResume(): void {
    this._route.navigateByUrl(`${MyWebsiteRoutingConstants.resumePage}`);
  }

  public onClickAbout(): void {
    this._route.navigate(['/'], {fragment: 'about-page'});
  }

  public onClickContact(): void {
    // contact dialog
  }

}
