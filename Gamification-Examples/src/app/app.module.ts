import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,MatButtonModule,
  MatSidenavModule,MatIconModule,MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routing } from './app.routing';

import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import { MedalhasComponent } from './medalhas/medalhas.component';
import { PontuacaoComponent } from './pontuacao/pontuacao.component';
import { MissoesComponent } from './missoes/missoes.component';
import { NivelComponent } from './nivel/nivel.component';
import { HelpBoxComponent } from './on-boarding/help-box/help-box.component';
import { CustomizationComponent } from './on-boarding/customization/customization.component';
import { TutorialComponent } from './on-boarding/tutorial/tutorial.component';
import { EducoinComponent } from './pontuacao/educoin/educoin.component';
import { PontosComponent } from './pontuacao/pontos/pontos.component';
import { KarmaComponent } from './pontuacao/karma/karma.component';
import { ReputacaoComponent } from './pontuacao/reputacao/reputacao.component';
import { CoopComponent } from './missoes/coop/coop.component';
import { SazonableComponent } from './missoes/sazonable/sazonable.component';
import { ComumComponent } from './missoes/comum/comum.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    OnBoardingComponent,
    MedalhasComponent,
    PontuacaoComponent,
    MissoesComponent,
    NivelComponent,
    HelpBoxComponent,
    CustomizationComponent,
    TutorialComponent,
    EducoinComponent,
    PontosComponent,
    KarmaComponent,
    ReputacaoComponent,
    CoopComponent,
    SazonableComponent,
    ComumComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
