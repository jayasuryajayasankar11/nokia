import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStocksComponent } from './local-stocks.component';

describe('LocalStocksComponent', () => {
  let component: LocalStocksComponent;
  let fixture: ComponentFixture<LocalStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalStocksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
