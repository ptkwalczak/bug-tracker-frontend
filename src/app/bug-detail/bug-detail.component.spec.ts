import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { BugService } from '../services/bug.service';
import { BUGS_RESPONSE_MOCK } from '../services/bug.service.stub';
import { BugDetailComponent } from './bug-detail.component';

describe('Bug Detail Component', () => {
  let component: BugDetailComponent;
  let fixture: ComponentFixture<BugDetailComponent>;
  let bugService;
  let getBugSpy;

  const LOCATORS = {
    closeBugButton: '.close-bug-button',
    assignToBugButton: '.assign-to-bug-button',
  };

  beforeEach(
    waitForAsync(() => {
      bugService = jasmine.createSpyObj('BugService', ['getBug']);
      getBugSpy = bugService.getBug.and.returnValue(of(BUGS_RESPONSE_MOCK[0]));
      TestBed.configureTestingModule({
        declarations: [BugDetailComponent],
        imports: [RouterTestingModule.withRoutes([])],
        providers: [{ provide: BugService, useValue: bugService }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BugDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be possible to close an opened bug', () => {
    expect(
      fixture.nativeElement.querySelector(LOCATORS.closeBugButton)
    ).toBeDefined();
  });

  it('should NOT be possible to close a closed bug', () => {
    component.bug = getMockBug(1);
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector(LOCATORS.closeBugButton)
    ).toBeNull();
  });

  it('should be possible to assign to an opened bug', () => {
    expect(
      fixture.nativeElement.querySelector(LOCATORS.assignToBugButton)
    ).toBeDefined();
  });

  it('should NOT be possible to assign to a closed bug', () => {
    component.bug = getMockBug(1);
    fixture.detectChanges();
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector(LOCATORS.assignToBugButton)
    ).toBeNull();
  });

  it('should NOT be possible to set PENDING bug back to assigned', () => {
    component.bug = getMockBug(2);
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector(LOCATORS.assignToBugButton)
    ).toBeNull();
  });

  it('should be possible to set PENDING bug back to closed', () => {
    component.bug = getMockBug(2);
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector(LOCATORS.assignToBugButton)
    ).toBeNull();
    expect(
      fixture.nativeElement.querySelector(LOCATORS.closeBugButton)
    ).toBeDefined();
  });
});

function getMockBug(index: number) {
  if (BUGS_RESPONSE_MOCK.length > index - 1) {
    return BUGS_RESPONSE_MOCK[index];
  }
  return BUGS_RESPONSE_MOCK[0];
}
