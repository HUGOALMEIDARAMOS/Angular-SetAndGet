import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptionComponent } from './interception.component';

describe('InterceptionComponent', () => {
  let component: InterceptionComponent;
  let fixture: ComponentFixture<InterceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterceptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
