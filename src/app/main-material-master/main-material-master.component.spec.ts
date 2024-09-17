import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMaterialMasterComponent } from './main-material-master.component';

describe('MainMaterialMasterComponent', () => {
  let component: MainMaterialMasterComponent;
  let fixture: ComponentFixture<MainMaterialMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMaterialMasterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainMaterialMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
