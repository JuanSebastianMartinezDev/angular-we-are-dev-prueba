import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeClientListComponent } from './type-client-list.component';

describe('TypeClientListComponent', () => {
  let component: TypeClientListComponent;
  let fixture: ComponentFixture<TypeClientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeClientListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
