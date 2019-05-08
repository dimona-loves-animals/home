import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ShimoshonComponent} from './features/shimoshon/shimoshon.component';
import {HomeComponent} from './features/home/home.component';
import {ComponentsModule} from './components/components.module';


@NgModule({
  declarations: [
    AppComponent,
    ShimoshonComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
