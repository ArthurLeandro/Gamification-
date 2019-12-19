// Funcionalities
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//Home
import { HomeComponent } from './components/home/home.component';
//Documentation
import { DocumentationComponent } from './documentation/documentation.component';
import { InteractionComponent } from './components/interaction/interaction.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { LevelComponent } from './components/level/level.component';
import { MissionComponent } from './components/mission/mission.component';
import { CustomizationComponent } from './components/customization/customization.component';
import { RankingSortedComponent } from './components/ranking-sorted/ranking-sorted.component';

const APP_ROUTES: Routes = [
  { path: '',            component: HomeComponent },
  { path: 'Documentação',component: DocumentationComponent },
  { path: 'Interação',   component: InteractionComponent },
  { path: 'Missões',     component: MissionComponent },
  { path: 'Customização',component: CustomizationComponent },
  { path: 'Tutorial',    component: TutorialComponent },
  { path: "Ranking",     component: RankingSortedComponent },
  { path: "Level",       component: LevelComponent },
  { path: "Interação",   component: InteractionComponent}
  //------------------------------------------------------------------

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
exports: [RouterModule.forRoot(APP_ROUTES)]

// Pontos Nível Karma HelpBox
// Missões Comuns Coop  Sazonais Medalhas 
// Butões Tutorial
// Customização