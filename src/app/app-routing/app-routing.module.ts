import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {IndexComponent} from '../index/index.component';
import {ErrorComponent} from '../error/error.component';
import {PageAdoptionComponent} from '../page-adoption/page-adoption.component';
import {PageShopComponent} from '../page-shop/page-shop.component';
import {PageSkillComponent} from '../page-skill/page-skill.component';
import {PageDiaryComponent} from '../page-diary/page-diary.component';
import {PageCommunityComponent} from '../page-community/page-community.component';
import {PagePersonalCenterComponent} from '../page-personal-center/page-personal-center.component'
import { PagePublishComponent } from '../page-publish/page-publish.component';
import { PageSearchComponent } from '../page-search/page-search.component';

const routes: Routes = [
  {
    path: 'index/:nickname',
    component: IndexComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'shop',
    component: PageShopComponent
  },
  {
    path: 'search',
    component: PageSearchComponent
  },
  {
    path: 'diary',
    component: PageDiaryComponent
  },
  {
    path: 'publish',
    component: PagePublishComponent
  },
  {
    path: 'personal/:telephone',
    component: PagePersonalCenterComponent
  },
  {
    path: '',
    redirectTo: '/index/',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
