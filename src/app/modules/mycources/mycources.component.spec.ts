import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycourcesComponent } from './mycources.component';

describe('MycourcesComponent', () => {
  let component: MycourcesComponent;
  let fixture: ComponentFixture<MycourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MycourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
