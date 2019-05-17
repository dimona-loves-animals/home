import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'dla-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('about') about: ElementRef;

  public constructor(private titleService: Title) {
    this.titleService.setTitle('דימונה אוהבת חיות');
  }

  ngOnInit() {
  }

  scrollToAbout(): void {
    const targetElement = this.about.nativeElement;
    targetElement.scrollIntoView({behavior: 'smooth'});
  }

}
