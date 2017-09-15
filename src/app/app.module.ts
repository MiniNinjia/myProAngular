import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

//导入localstrong模块
import {LocalStorage} from './app.local.storage';
import {CookieService} from 'angular2-cookie/services/cookies.service';
//导入动画模块
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//导入路由模块
import {CommunityRoutingModule} from './page-community/community-routing/community-routing.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AdoptionRoutingModule} from './page-adoption/adoption-routing/adoption-routing.module'
import {SkillRouteModule} from './page-skill/skill-route/skill-route.module'
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
import { AdoptionShowpetComponent } from './page-adoption/adoption-main/adoption-showpet/adoption-showpet.component';
import { AdoptionListComponent } from './page-adoption/adoption-main/adoption-list/adoption-list.component';
import { AdoptionMainComponent } from './page-adoption/adoption-main/adoption-main.component';
import { AdoptionDetailsComponent } from './page-adoption/adoption-details/adoption-details.component';
import { AdoptionListItmeComponent } from './page-adoption/adoption-list-itme/adoption-list-itme.component';
import { TextComponent } from './index/text/text.component';
import { CommunityListComponent } from './page-community/community-list/community-list.component';
import { CommunityDetailsComponent } from './page-community/community-details/community-details.component';
import { CommunityMainComponent } from './page-community/community-main/community-main.component';
import { NumberPipePipe } from './adoption-pipe/number-pipe.pipe';
import { SkillDetailsComponent } from './page-skill/skill-details/skill-details.component';
import { PetIntroduceComponent } from './page-adoption/adoption-details/pet-introduce/pet-introduce.component';
import { PetMessagenoteComponent } from './page-adoption/adoption-details/pet-messagenote/pet-messagenote.component';
import { DiaryDetailsComponent } from './page-diary/diary-details/diary-details.component';
import { DiaryHeaderComponent } from './page-diary/diary-header/diary-header.component';
import { DiaryRoutingComponent } from './page-diary/diary-routing/diary-routing.component';
// import { DiaryHeaderComponent } from './diary-header/diary-header.component';
// import { DiaryDetailComponent } from './page-diary/diary-detail/diary-detail.component';
import { SkillMainComponent } from './page-skill/skill-main/skill-main.component';


@NgModule({
  declarations: [
    NumberPipePipe,
    SkillDetailsComponent,
    PetIntroduceComponent,
    PetMessagenoteComponent,
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
    PageCommunityComponent,
    AdoptionShowpetComponent,
    AdoptionListComponent,
    AdoptionMainComponent,
    AdoptionDetailsComponent,
    AdoptionListItmeComponent,
    SkillMainComponent,
    AdoptionListItmeComponent,
    DiaryDetailsComponent,
    DiaryHeaderComponent,
    DiaryRoutingComponent,

    // DiaryHeaderComponent,
    // DiaryDetailComponent
    AdoptionListItmeComponent,
    TextComponent,
    CommunityListComponent,
    CommunityDetailsComponent,
    CommunityMainComponent
  ],
  imports: [
    BrowserModule,
    CommunityRoutingModule,
    //子路由
    AdoptionRoutingModule,
    SkillRouteModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [LocalStorage, CookieService, GlobalPropertyService, UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
