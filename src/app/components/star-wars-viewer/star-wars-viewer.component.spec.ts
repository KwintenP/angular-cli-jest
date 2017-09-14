import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StarWarsViewerComponent} from './star-wars-viewer.component';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {NotificationService} from '../../services/notification.service';
import {StarWarsService} from '../../services/star-wars.service';

describe('StarWarsViewerComponent', () => {
  let componentUT: StarWarsViewerComponent;
  let formBuilderMock;
  let starWarsServiceMock;
  let notificationServiceMock;

  beforeEach(() => {
    formBuilderMock = {
      group: jest.fn()
    };
    starWarsServiceMock = {
      getStarWarsCharacter: jest.fn()
    };
    notificationServiceMock = {
      showSuccess: jest.fn()
    };
  });

  describe('snapshot testing', () => {
    let component: StarWarsViewerComponent;
    let fixture: ComponentFixture<StarWarsViewerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [StarWarsViewerComponent],
          providers: [
            {provide: FormBuilder, useValue: formBuilderMock},
            {provide: NotificationService, useValue: notificationServiceMock},
            {provide: StarWarsService, useValue: starWarsServiceMock}
          ],
          schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
      })
    );

    beforeEach(() => {
      let formGroupMock = new FormGroup({
        id: new FormControl()
      });
      formBuilderMock.group.mockReturnValue(formGroupMock);

      fixture = TestBed.createComponent(StarWarsViewerComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should be created', () => {
      expect(fixture).toMatchSnapshot();
    });

    it('should list the characters when the data is fetched', () => {
      let character = {name: 'Luke Skywalker'};
      let returnValue = Observable.of(character);
      starWarsServiceMock.getStarWarsCharacter.mockReturnValue(returnValue);

      component.getCharacter();
      fixture.detectChanges();

      expect(fixture).toMatchSnapshot();
    });
  });

  describe('unit tests', () => {
    beforeEach(() => {
      componentUT = new StarWarsViewerComponent(
        formBuilderMock,
        starWarsServiceMock,
        notificationServiceMock
      );
    });

    describe('on ngOnInit', () => {
      it('should init the formGroup', () => {
        let formGroupMock = new FormGroup({
          id: new FormControl()
        });
        formBuilderMock.group.mockReturnValue(formGroupMock);

        componentUT.ngOnInit();

        expect(componentUT.idFormGroup).toBe(formGroupMock);
        expect(formBuilderMock.group).toHaveBeenCalled();
        expect(formBuilderMock.group.mock.calls.length).toBe(1);
        expect(formBuilderMock.group.mock.calls[0][0]).toEqual({
          id: ''
        });
      });
    });

    describe('on getCharacter', () => {
      it('should fetch a char$ from the starWarsService', () => {
        componentUT.idFormGroup = new FormGroup({
          id: new FormControl()
        });

        let character = {name: 'Luke Skywalker'};
        let returnValue = Observable.of(character);
        starWarsServiceMock.getStarWarsCharacter.mockReturnValue(returnValue);

        componentUT.getCharacter();

        componentUT.character$.subscribe(
          (val) => {
            expect(val).toBe(character)
            expect(notificationServiceMock.showSuccess).toHaveBeenCalled();
          }
        );
      });
    });
  });
})
;
