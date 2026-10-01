import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateDrivenFormValidation } from './template-driven-form-validation';

describe('TemplateDrivenFormValidation', () => {
  let component: TemplateDrivenFormValidation;
  let fixture: ComponentFixture<TemplateDrivenFormValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenFormValidation],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFormValidation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
