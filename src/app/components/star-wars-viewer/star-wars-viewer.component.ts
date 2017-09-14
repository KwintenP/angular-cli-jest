import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {StarWarsService} from '../../services/star-wars.service';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-star-wars-viewer',
  templateUrl: './star-wars-viewer.component.html',
  styleUrls: ['./star-wars-viewer.component.css']
})
export class StarWarsViewerComponent implements OnInit {
  idFormGroup;
  character$;

  constructor(private formBuilder: FormBuilder,
              private starwarsService: StarWarsService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.idFormGroup = this.formBuilder.group({
      id: ''
    });
  }

  getCharacter() {
    this.character$ = this.starwarsService.getStarWarsCharacter(this.idFormGroup.value.id)
      .do(_ => this.notificationService.showSuccess('Fetched data correctly'));
  }
}
