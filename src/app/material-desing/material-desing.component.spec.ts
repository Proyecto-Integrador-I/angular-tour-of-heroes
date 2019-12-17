import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDesingComponent } from './material-desing.component';

describe('MaterialDesingComponent', () => {
  let component: MaterialDesingComponent;
  let fixture: ComponentFixture<MaterialDesingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDesingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
