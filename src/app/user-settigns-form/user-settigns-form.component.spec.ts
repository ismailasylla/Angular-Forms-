import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettignsFormComponent } from './user-settigns-form.component';

describe('UserSettignsFormComponent', () => {
  let component: UserSettignsFormComponent;
  let fixture: ComponentFixture<UserSettignsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSettignsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettignsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
