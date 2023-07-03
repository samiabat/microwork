import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditJobComponent } from './add-edit-job.component';

describe('AddEditJobComponent', () => {
  let component: AddEditJobComponent;
  let fixture: ComponentFixture<AddEditJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditJobComponent]
    });
    fixture = TestBed.createComponent(AddEditJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
