import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//导入页面
import {SkillMainComponent} from '../skill-main/skill-main.component';
import {SkillDetailsComponent} from '../skill-details/skill-details.component';
import {PageSkillComponent} from '../page-skill.component';
//导入路由
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {
    path: 'skill',
    component: PageSkillComponent,
    children: [
      {
        path: '',
        component: SkillMainComponent,
      },
      {
        path: 'detail/:peid',
        component: SkillDetailsComponent,
      }
      ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class SkillRoutingModule { }
