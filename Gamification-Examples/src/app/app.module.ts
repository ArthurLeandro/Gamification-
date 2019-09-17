import { InteractionServiceService } from './interaction/interaction-service.service';
import { CustomizationComponent } from './customization/customization.component';
import { InteractionComponent } from './interaction/interaction.component';
import { EventsComponent } from './events/events.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import{AngularMaterialModule} from './angular.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routing } from './app.routing';

import { HomeComponent } from './home/home.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { DialogTestComponent } from './dialog-test/dialog-test.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { DialogPointsComponent } from './dialog-points/dialog-points.component';

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
    DialogPointsComponent

  ],
  imports: [
    BrowserModule,
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
