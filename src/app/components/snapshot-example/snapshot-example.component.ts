import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-snapshot-example',
  templateUrl: './snapshot-example.component.html',
  styleUrls: ['./snapshot-example.component.css']
})
export class SnapshotExampleComponent implements OnInit {
  title: string;
  data: [any];

  visible = false;

  constructor() {
  }

  ngOnInit() {
    this.title = 'Dit is een dynamisch titeltje';
    this.data = ['test', 'test2', 'test3'];
  }

}
