import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFromComponent } from './post-from.component';

describe('PostFromComponent', () => {
  let component: PostFromComponent;
  let fixture: ComponentFixture<PostFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
