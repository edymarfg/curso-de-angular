import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCliLibsExternasComponent } from './angular-cli-libs-externas.component';

describe('AngularCliLibsExternasComponent', () => {
  let component: AngularCliLibsExternasComponent;
  let fixture: ComponentFixture<AngularCliLibsExternasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularCliLibsExternasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularCliLibsExternasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
