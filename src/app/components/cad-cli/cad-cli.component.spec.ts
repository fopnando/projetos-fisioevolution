import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadcliComponent } from './cad-cli.component';

describe('CadcliComponent', () => {
  let component: CadcliComponent;
  let fixture: ComponentFixture<CadcliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadcliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadcliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
