import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhePostComponent } from './detalhe-post.component';

describe('DetalhePostComponent', () => {
  let component: DetalhePostComponent;
  let fixture: ComponentFixture<DetalhePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhePostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
