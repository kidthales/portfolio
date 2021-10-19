import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTestingModule } from '../../../shared/shared-testing.module';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedTestingModule],
      declarations: [NotFoundComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());

  it('should be able to go back (route)', () => {
    const locationBackSpy = jest.spyOn(component['location'], 'back');

    component.goBack();

    expect(locationBackSpy).toHaveBeenCalled();
  });
});
