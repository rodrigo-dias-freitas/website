import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPorCategoriaComponent } from './post-por-categoria.component';

describe('PostPorCategoriaComponent', () => {
  let component: PostPorCategoriaComponent;
  let fixture: ComponentFixture<PostPorCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostPorCategoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostPorCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
