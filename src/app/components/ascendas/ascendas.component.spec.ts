import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AscendasComponent } from './ascendas.component';

describe('AscendasComponent', () => {
  let component: AscendasComponent;
  let fixture: ComponentFixture<AscendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AscendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AscendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
