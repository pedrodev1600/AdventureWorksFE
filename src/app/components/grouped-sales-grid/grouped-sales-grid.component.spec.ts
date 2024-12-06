import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupedSalesComponent } from './grouped-sales-grid.component';


describe('GroupedTerritorySalesComponent', () => {
  let component: GroupedSalesComponent;
  let fixture: ComponentFixture<GroupedSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupedSalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupedSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
