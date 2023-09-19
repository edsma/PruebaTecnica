import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDecksComponent } from './card-decks.component';

describe('CardDecksComponent', () => {
  let component: CardDecksComponent;
  let fixture: ComponentFixture<CardDecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDecksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
