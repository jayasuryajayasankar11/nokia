import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStocksComponent } from './main-stocks.component';

describe('MainStocksComponent', () => {
  let component: MainStocksComponent;
  let fixture: ComponentFixture<MainStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainStocksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
