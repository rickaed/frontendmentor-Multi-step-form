import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumComponent } from './resum.component';

describe('ResumComponent', () => {
  let component: ResumComponent;
  let fixture: ComponentFixture<ResumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
