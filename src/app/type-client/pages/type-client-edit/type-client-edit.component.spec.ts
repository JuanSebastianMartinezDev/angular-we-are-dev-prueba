import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeClientEditComponent } from './type-client-edit.component';

describe('TypeClientEditComponent', () => {
  let component: TypeClientEditComponent;
  let fixture: ComponentFixture<TypeClientEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeClientEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeClientEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
