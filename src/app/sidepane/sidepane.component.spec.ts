import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidepaneComponent } from './sidepane.component';

describe('SidepaneComponent', () => {
  let component: SidepaneComponent;
  let fixture: ComponentFixture<SidepaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidepaneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidepaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
