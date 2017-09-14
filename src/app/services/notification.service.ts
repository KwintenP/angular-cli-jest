import { Injectable } from '@angular/core';
import {success, error} from 'toastr';

@Injectable()
export class NotificationService {

  constructor() { }

  showSuccess(message: string) {
    success(message);
  }

  showError(message: string) {
    error(message);
  }
}
