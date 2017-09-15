import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

//导入页面
import {ErrorComponent} from '../../error/error.component';
import {AdoptionDetailsComponent} from '../adoption-details/adoption-details.component';
import {AdoptionMainComponent} from '../adoption-main/adoption-main.component';
import {AdoptionListItmeComponent} from '../adoption-list-itme/adoption-list-itme.component';
import {PageAdoptionComponent} from '../page-adoption.component';

const routes: Routes = [
  {
    path: 'adoption',
    component: PageAdoptionComponent,
    children: [
      {
        path: '',
        component: AdoptionMainComponent,
      },
      {
        path: 'detail/:petid',
        component: AdoptionDetailsComponent,
      },
      {
        path: 'list',
        component: AdoptionListItmeComponent,
      },

    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AdoptionRoutingModule {
}
