import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgodpassComponent } from './forgodpass.component';

describe('ForgodpassComponent', () => {
  let component: ForgodpassComponent;
  let fixture: ComponentFixture<ForgodpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgodpassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgodpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
