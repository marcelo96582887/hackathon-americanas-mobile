import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddusuarioPage } from './addusuario.page';

describe('AddusuarioPage', () => {
  let component: AddusuarioPage;
  let fixture: ComponentFixture<AddusuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddusuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
