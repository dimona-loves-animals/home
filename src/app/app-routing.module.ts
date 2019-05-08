import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShimoshonComponent} from './features/shimoshon/shimoshon.component';
import {HomeComponent} from './features/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'שימושון', component: ShimoshonComponent},
  // {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
