import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'dla-shimoshon',
  templateUrl: './shimoshon.component.html',
  styleUrls: ['./shimoshon.component.scss']
})
export class ShimoshonComponent {
  public constructor(private titleService: Title) {
    this.titleService.setTitle('שימושון | דימונה אוהבת חיות');
  }
}
