import { RankingComponent } from './components/ranking/ranking.component';
import { CustomizationComponent } from './components/customization/customization.component';
// Funcionalities
import{Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//Home
import{HomeComponent} from './components/home/home.component';
//Documentation
import{DocumentationComponent} from './documentation/documentation.component';
import { InteractionComponent } from './components/interaction/interaction.component';
import { EventsComponent } from './events/events.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import{LevelComponent} from './components/level/level.component';


const APP_ROUTES: Routes=[
  {path:'',component:HomeComponent},
  {path:'Documentação',component:DocumentationComponent},
  {path:'Interação',component:InteractionComponent},
  {path:'Eventos',component:EventsComponent},
  {path:'Customização',component:CustomizationComponent},
  {path:'Tutorial',component:TutorialComponent},
  {path:"Ranking",component:RankingComponent},
  {path:"Level",component:LevelComponent}
  //------------------------------------------------------------------
  
];

export const Routing: ModuleWithProviders=RouterModule.forRoot(APP_ROUTES);
exports: [RouterModule.forRoot(APP_ROUTES)]

// Pontos Nível Karma HelpBox
// Missões Comuns Coop  Sazonais Medalhas 
// Butões Tutorial
// Customização