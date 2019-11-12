
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule} from './angular.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routing } from './app.routing';
import { HttpClientModule} from '@angular/common/http';

import { RankingComponent } from './ranking/ranking.component';
import { InteractionServiceService } from './interaction/interaction-service.service';
import { CustomizationComponent } from './customization/customization.component';
import { InteractionComponent } from './interaction/interaction.component';
import { EventsComponent } from './events/events.component';

import { HomeComponent } from './home/home.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { DialogTestComponent } from './dialog-test/dialog-test.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { DialogPointsComponent } from './dialog-points/dialog-points.component';
import { RankingLecturePlanComponent } from './ranking/ranking-lecture-plan/ranking-lecture-plan.component';
import { RankingTeachingMethodComponent } from './ranking/ranking-teaching-method/ranking-teaching-method.component';
import { RankingResourcesComponent } from './ranking/ranking-resources/ranking-resources.component';
import { RankingActivityComponent } from './ranking/ranking-activity/ranking-activity.component';
import { RankingProfessorsComponent } from './ranking/ranking-professors/ranking-professors.component';

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
    RankingProfessorsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    Routing,
  ],
  providers: [HomeComponent,InteractionServiceService],
  bootstrap: [AppComponent],
  entryComponents:[DialogTestComponent,DialogPointsComponent],
})
export class AppModule { }
