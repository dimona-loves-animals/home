import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubscribeComponent} from './subscribe/subscribe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    SubscribeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    SubscribeComponent,
  ]
})
export class ComponentsModule {
}
