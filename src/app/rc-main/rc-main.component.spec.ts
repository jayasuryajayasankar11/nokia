import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcMainComponent } from './rc-main.component';

describe('RcMainComponent', () => {
  let component: RcMainComponent;
  let fixture: ComponentFixture<RcMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RcMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RcMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
