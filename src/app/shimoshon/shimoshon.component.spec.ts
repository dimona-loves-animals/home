import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShimoshonComponent } from './shimoshon.component';

describe('ShimoshonComponent', () => {
  let component: ShimoshonComponent;
  let fixture: ComponentFixture<ShimoshonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShimoshonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShimoshonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
