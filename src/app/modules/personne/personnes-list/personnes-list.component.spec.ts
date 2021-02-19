import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnesListComponent } from './personnes-list.component';

describe('PersonnesListComponent', () => {
  let component: PersonnesListComponent;
  let fixture: ComponentFixture<PersonnesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
