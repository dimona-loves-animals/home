import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'dla-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('about') about: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  scrollToAbout(): void {
    const targetElement = this.about.nativeElement;
    targetElement.scrollIntoView({behavior: 'smooth'});
  }

}
