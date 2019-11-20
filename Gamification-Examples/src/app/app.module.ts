
//#region Modules

//#endregion

//#region Angular Components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from './angular.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
//#endregion

//#region Componenets
import { RankingComponent } from './components/ranking/ranking.component';
import { InteractionServiceService } from './components/interaction/interaction-service.service';
import { CustomizationComponent } from './components/customization/customization.component';
import { InteractionComponent } from './components/interaction/interaction.component';
import { EventsComponent } from './events/events.component';

import { HomeComponent } from './components/home/home.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { DialogTestComponent } from './components/dialog-test/dialog-test.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { DialogPointsComponent } from './components/dialog-points/dialog-points.component';
import { RankingLecturePlanComponent } from './components/ranking/ranking-lecture-plan/ranking-lecture-plan.component';
import { RankingTeachingMethodComponent } from './components/ranking/ranking-teaching-method/ranking-teaching-method.component';
import { RankingResourcesComponent } from './components/ranking/ranking-resources/ranking-resources.component';
import { RankingActivityComponent } from './components/ranking/ranking-activity/ranking-activity.component';
import { RankingProfessorsComponent } from './components/ranking/ranking-professors/ranking-professors.component';
import { LevelComponent } from './components/level/level.component';
import { RankingSortedComponent } from './components/ranking-sorted/ranking-sorted.component';
//#endregion

//#region Services
import { LevelService } from './services/level-service.service';
import { RankingSortedServiceService } from './services/ranking-sorted-service.service';
//#endregion

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    DocumentationComponent,
    DialogTestComponent,
    InteractionComponent,
    EventsComponent,
    CustomizationComponent,
    TutorialComponent,
    DialogPointsComponent,
    RankingComponent,
    RankingLecturePlanComponent,
    RankingTeachingMethodComponent,
    RankingResourcesComponent,
    RankingActivityComponent,
    RankingProfessorsComponent,
    LevelComponent,
    RankingSortedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    Routing,
  ],
  providers: [
    HomeComponent,
    InteractionServiceService,
    LevelService,
    RankingSortedServiceService
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    DialogTestComponent,
    DialogPointsComponent
  ],
})
export class AppModule { }
