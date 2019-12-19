 //#region Angular Directives
 import { Injectable } from '@angular/core';
 //#endregion
 
 //#region My-Own-Components
 import { Gamification } from './../classes/namespaces/gamification';
 //#endregion
 
@Injectable({
  providedIn: 'root'
})
export class InteractionServiceService {
  interactionManager:Gamification.PointsManager;
  constructor() {
  this.interactionManager = new Gamification.PointsManager();
  }

}
