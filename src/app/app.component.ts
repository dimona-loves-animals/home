import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'dla-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dla';

  @ViewChild('about') about: ElementRef;

  scrollToAbout(): void {
    const targetElement = this.about.nativeElement;
    targetElement.scrollIntoView({behavior: 'smooth'});
  }

}
