import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
//导入页面
import {ErrorComponent} from '../../error/error.component';
import {DiaryChildComponent} from '../diary-child/diary-child.component';
import {DiaryMainComponent} from'../diary-main/diary-main.component';
import {PageDiaryComponent} from '../page-diary.component';
import {DiaryChild2Component}from'../diary-child2/diary-child2.component'
const routes: Routes = [
  {
    path: 'diary',
    component: PageDiaryComponent,
    children: [
      {
        path: '',
        component: DiaryMainComponent,
      },
      {
        path: 'detail/:petid',
        component: DiaryChildComponent,
      },
      {
        path: 'write',
        component: DiaryChild2Component,
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class DiaryRoutingModule {
}
