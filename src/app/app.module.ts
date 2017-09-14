import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SnapshotExampleComponent} from './components/snapshot-example/snapshot-example.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StarWarsViewerComponent} from './components/star-wars-viewer/star-wars-viewer.component';
import {StarWarsService} from './services/star-wars.service';
import {HttpModule} from '@angular/http';

// RxJS operators
import 'rxjs/add/operator/map';
import {NotificationService} from './services/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    SnapshotExampleComponent,
    StarWarsViewerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    StarWarsService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
