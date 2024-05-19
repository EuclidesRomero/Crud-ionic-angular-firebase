import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecordingStudioPage } from './recording-studio.page';

describe('RecordingStudioPage', () => {
  let component: RecordingStudioPage;
  let fixture: ComponentFixture<RecordingStudioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordingStudioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
