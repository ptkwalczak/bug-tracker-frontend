import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { BugService } from '../services/bug.service';
import { BUGS_RESPONSE_MOCK } from '../services/bug.service.stub';
import { BugsComponent } from './bugs.component';

describe('Bugs Component', () => {
  let component: BugsComponent;
  let fixture: ComponentFixture<BugsComponent>;
  let bugService;
  let getBugsSpy;

  beforeEach(
    waitForAsync(() => {
      bugService = jasmine.createSpyObj('BugService', ['getBugs']);
      getBugsSpy = bugService.getBugs.and.returnValue(of(BUGS_RESPONSE_MOCK));
      TestBed.configureTestingModule({
        declarations: [BugsComponent],
        imports: [RouterTestingModule.withRoutes([])],
        providers: [{ provide: BugService, useValue: bugService }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should list 4 bugs', () => {
    const numberOfItems = fixture.nativeElement.querySelectorAll('li').length;
    expect(numberOfItems).toEqual(4);
  });
});
