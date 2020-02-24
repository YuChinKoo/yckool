import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private _route: Router) {
    _route.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = _route.parseUrl(_route.url);
        if (tree.fragment) {
          const element = document.querySelector('#' + tree.fragment);
          if (element) {element.scrollIntoView(true);}
        }
      }
    });
  }

}
