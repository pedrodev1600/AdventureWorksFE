import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritorySalesComponent } from './territory-sales.component';

describe('TerritorySalesComponent', () => {
  let component: TerritorySalesComponent;
  let fixture: ComponentFixture<TerritorySalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerritorySalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerritorySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
