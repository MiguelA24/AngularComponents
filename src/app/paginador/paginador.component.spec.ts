import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadorComponent } from './paginador.component';

describe('PaginadorComponent', () => {
  let component: PaginadorComponent;
  let fixture: ComponentFixture<PaginadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PaginadorComponent]
    });
    fixture = TestBed.createComponent(PaginadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
