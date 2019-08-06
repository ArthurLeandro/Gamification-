// Funcionalities
import{Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// On Boarding
import { CustomizationComponent } from './on-boarding/customization/customization.component';
import { HelpBoxComponent } from './on-boarding/help-box/help-box.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import { TutorialComponent } from './on-boarding/tutorial/tutorial.component';
// Medals
import { MedalhasComponent } from './medalhas/medalhas.component';
// Points
import { ReputacaoComponent } from './pontuacao/reputacao/reputacao.component';
import { PontuacaoComponent } from './pontuacao/pontuacao.component';
import { EducoinComponent } from './pontuacao/educoin/educoin.component';
import { PontosComponent } from './pontuacao/pontos/pontos.component';
import { KarmaComponent } from './pontuacao/karma/karma.component';
// Missions
import { MissoesComponent } from './missoes/missoes.component';
import { CoopComponent } from './missoes/coop/coop.component';
import { SazonableComponent } from './missoes/sazonable/sazonable.component';
import { ComumComponent } from './missoes/comum/comum.component';
// Level
import { NivelComponent } from './nivel/nivel.component';

const APP_ROUTES: Routes=[
  {path:'Home',component:MainMenuComponent},
  //------------------------------------------------------------------
  {path:"OnBoarding",component:OnBoardingComponent},
  {path:"OnBoarding/HelpBox",component:HelpBoxComponent},
  {path:"OnBoarding/Customization",component:CustomizationComponent},
  {path:"OnBoarding/Tutorial",component:TutorialComponent},
  //------------------------------------------------------------------
  {path:"Medalhas",component:MedalhasComponent},
  //------------------------------------------------------------------
  {path:"Pontuacao",component:PontuacaoComponent},
  {path:"Pontuacao/Educoin",component:EducoinComponent},
  {path:"Pontuacao/Pontos",component:PontosComponent},
  {path:"Pontuacao/Karma",component:KarmaComponent},
  {path:"Pontuacao/Reputacao",component:ReputacaoComponent},
  //------------------------------------------------------------------
  {path:"Missoes",component:MissoesComponent},
  {path:"Missoes/Coop",component:CoopComponent},
  {path:"Missoes/Sazonal",component:SazonableComponent},
  {path:"Missoes/Comum",component:ComumComponent},
  //------------------------------------------------------------------
  {path:"Nivel",component:NivelComponent},
];

export const Routing: ModuleWithProviders=RouterModule.forRoot(APP_ROUTES);