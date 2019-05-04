import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dla-shimoshon',
  templateUrl: './shimoshon.component.html',
  styleUrls: ['./shimoshon.component.scss']
})
export class ShimoshonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href = 'http://blog.dimonalovesanimals.org/שימושון';
  }

}
