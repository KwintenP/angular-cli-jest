import {StarWarsService} from './star-wars.service';
import {Observable} from 'rxjs/Observable';

describe('StarWarsService', () => {
  let service: StarWarsService;
  let httpMock;

  beforeEach(() => {
    // httpMock = createSpyObj('http', ['get'];
    httpMock = {
      get: jest.fn()
    };

    service = new StarWarsService(httpMock);
  });

  describe('on getStarWarsCharacter', () => {
    it('should do a call to fetch the character with the correct id and return the result', () => {
      let returnValue = {
        test: 'test'
      };
      // (httpMock.get as Spy).and.returnValue(Observable.of('returnValue'));
      httpMock.get.mockReturnValue(Observable.of({
        json: () => (returnValue)
      }));

      const result$ = service.getStarWarsCharacter('5');

      result$.subscribe((result) => {
        expect(result).toBe(result);
      })

      expect(httpMock.get).toHaveBeenCalled();
      // (httpMock.get as Spy).calls.length
      expect(httpMock.get.mock.calls.length).toBe(1);
      // (httpMock.get as Spy).calls.mostRecent()[0]
      expect(httpMock.get.mock.calls[0][0]).toBe('https://swapi.co/api/people/5');
    });
  });
});
