import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesImagesComponent } from './slides-images.component';

describe('SlidesImagesComponent', () => {
  let component: SlidesImagesComponent;
  let fixture: ComponentFixture<SlidesImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidesImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidesImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
