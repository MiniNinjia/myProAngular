import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


import {PageCommunityComponent} from '../page-community.component';
import {CommunityDetailsComponent} from '../community-details/community-details.component';
import {CommunityMainComponent} from '../community-main/community-main.component';
const routes: Routes = [
  {
    path: 'community',
    component: PageCommunityComponent,
    children: [
      {
        path: '',
        component: CommunityMainComponent,
      },
      {
        path: 'detail/:article',
        component: CommunityDetailsComponent,
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class CommunityRoutingModule {
}
