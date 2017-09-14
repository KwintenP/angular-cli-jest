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
    StarWarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
