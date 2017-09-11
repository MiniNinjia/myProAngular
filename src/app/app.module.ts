import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

//导入localstrong模块
import {LocalStorage} from './app.local.storage';
import {CookieService} from 'angular2-cookie/services/cookies.service';
//导入动画模块
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//导入路由模块
import {AppRoutingModule} from './app-routing/app-routing.module';
// 导入服务模块
import {GlobalPropertyService} from './services/global-property.service';
import {UserInfoService} from './services/userInfo.service';
//导入组件模块
import {AdoptionComponent} from './index/adoption/adoption.component';
import {DiaryComponent} from './index/diary/diary.component';
import {SkillComponent} from './index/skill/skill.component';
import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';
import {AdComponent} from './index/ad/ad.component';
import {HeaderComponent} from './header/header.component';
import {ErrorComponent} from './error/error.component';
import {PageAdoptionComponent} from './page-adoption/page-adoption.component';
import {PageDiaryComponent} from './page-diary/page-diary.component';
import {PageSkillComponent} from './page-skill/page-skill.component';
import {PageShopComponent} from './page-shop/page-shop.component';
import {PageCommunityComponent} from './page-community/page-community.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    ErrorComponent,
    AdComponent,
    AdoptionComponent,
    DiaryComponent,
    SkillComponent,
    PageAdoptionComponent,
    PageDiaryComponent,
    PageSkillComponent,
    PageShopComponent,
    PageCommunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [LocalStorage, CookieService, GlobalPropertyService, UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
