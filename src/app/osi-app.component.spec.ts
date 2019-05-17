import { TestBed, async } from '@angular/core/testing';
import { OsiAppComponent } from './osi-app.component';

describe('OsiAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OsiAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(OsiAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'osi-ihm'`, () => {
    const fixture = TestBed.createComponent(OsiAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('osi-ihm');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(OsiAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to osi-ihm!');
  });
});
