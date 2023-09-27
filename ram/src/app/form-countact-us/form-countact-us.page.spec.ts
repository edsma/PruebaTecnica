import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormCountactUsPage } from './form-countact-us.page';

describe('FormCountactUsPage', () => {
  let component: FormCountactUsPage;
  let fixture: ComponentFixture<FormCountactUsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormCountactUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
