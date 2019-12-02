//#region Angular Directives
import { Injectable } from '@angular/core';
//#endregion

//#region My-Own-Components
import { Gamification } from './../classes/namespaces/gamification';
//#endregion

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  levelManager: Gamification.Level.LevelManager;
  exponentialFactor:number = 1.6;
  constructor() {
    this.levelManager = new Gamification.Level.LevelManager(this.exponentialFactor);
  }
  public SetExponential(_value:number){
    this.exponentialFactor = _value;
  }


}
