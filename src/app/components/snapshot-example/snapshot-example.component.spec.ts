import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotExampleComponent } from './snapshot-example.component';

describe('SnapshotExampleComponent', () => {
  let component: SnapshotExampleComponent;
  let fixture: ComponentFixture<SnapshotExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapshotExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapshotExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should match the previous snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });


  it('should match the previous snapshot2', () => {
    component.visible = true;
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
