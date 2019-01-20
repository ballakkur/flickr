import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageComponent } from './image/image.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'image/:id/:p',component:ImageComponent},
  {path:'view/:id/:p',component:ViewComponent},
  {path:'',redirectTo:'image/1/1',pathMatch:'full'},
  {path:'*',component:ImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
