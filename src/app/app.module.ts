import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SnapshotTestComponent} from './components/snapshot-test/snapshot-test.component';

@NgModule({
  declarations: [
    AppComponent,
    SnapshotTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
