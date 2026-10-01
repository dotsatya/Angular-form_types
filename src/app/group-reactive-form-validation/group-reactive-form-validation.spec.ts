import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupReactiveFormValidation } from './group-reactive-form-validation';

describe('GroupReactiveFormValidation', () => {
  let component: GroupReactiveFormValidation;
  let fixture: ComponentFixture<GroupReactiveFormValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupReactiveFormValidation],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupReactiveFormValidation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
