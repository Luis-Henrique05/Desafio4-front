import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosComponent } from './servicos.component';

describe('MotoristasComponent', () => {
  let component: ServicosComponent;
  let fixture: ComponentFixture<ServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
