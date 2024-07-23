import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderLoginComponent } from '../login/header.component';


describe('HeaderComponent', () => {
  let component: HeaderLoginComponent;
  let fixture: ComponentFixture<HeaderLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
