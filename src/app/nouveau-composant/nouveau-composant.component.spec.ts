import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauComposantComponent } from './nouveau-composant.component';

describe('NouveauComposantComponent', () => {
  let component: NouveauComposantComponent;
  let fixture: ComponentFixture<NouveauComposantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauComposantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
