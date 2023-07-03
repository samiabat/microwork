import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProposalComponent } from './add-edit-proposal.component';

describe('AddEditProposalComponent', () => {
  let component: AddEditProposalComponent;
  let fixture: ComponentFixture<AddEditProposalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditProposalComponent]
    });
    fixture = TestBed.createComponent(AddEditProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
