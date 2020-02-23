import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-my-website',
  templateUrl: './my-website.component.html',
  styleUrls: ['./my-website.component.scss']
})
export class MyWebsiteComponent implements AfterViewInit {

  public randomNumber: number;
  public photos: string[] = [
    'img-sao-aincrad',
    'img-sao-aincrad-logcabin'
  ];
  public image: string;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.randomNumber = Math.floor(Math.random() * 2);
    this.image = this.photos[this.randomNumber];
    this.cdr.detectChanges();
  }

}
