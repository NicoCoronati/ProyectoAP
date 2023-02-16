import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewexpecienciaComponent } from './newexpeciencia.component';

describe('NewexpecienciaComponent', () => {
  let component: NewexpecienciaComponent;
  let fixture: ComponentFixture<NewexpecienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewexpecienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewexpecienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
