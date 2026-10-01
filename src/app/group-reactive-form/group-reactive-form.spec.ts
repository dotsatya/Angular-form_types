import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupReactiveForm } from './group-reactive-form';

describe('GroupReactiveForm', () => {
  let component: GroupReactiveForm;
  let fixture: ComponentFixture<GroupReactiveForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupReactiveForm],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupReactiveForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
