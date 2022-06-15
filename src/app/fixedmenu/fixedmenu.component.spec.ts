import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedmenuComponent } from './fixedmenu.component';

describe('FixedmenuComponent', () => {
  let component: FixedmenuComponent;
  let fixture: ComponentFixture<FixedmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
