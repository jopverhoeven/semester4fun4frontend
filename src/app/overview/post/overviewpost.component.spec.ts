  import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewpostComponent } from './overviewpost.component';

describe('OverviewpostComponent', () => {
  let component: OverviewpostComponent;
  let fixture: ComponentFixture<OverviewpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
