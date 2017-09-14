import {NotificationService} from './notification.service';
import {error, success} from 'toastr';

jest.mock('toastr');


describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    service = new NotificationService();
  });

  describe('on succes', () => {
    it('should call the toastr success message', () => {
      success.mockReturnValue('test')

      service.showSuccess('message');

      expect(success).toHaveBeenCalled();
    });
  });

  // describe('on error', () => {
  //   it('should call the toastr error message', () => {
  //     error.mockReturnValue('test')
  //
  //     service.showError('message');
  //
  //     expect(error).toHaveBeenCalled();
  //   });
  // });
});
