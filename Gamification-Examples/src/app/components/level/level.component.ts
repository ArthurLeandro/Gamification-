import { LevelService } from './../../services/level-service.service';
import { Component, OnInit } from '@angular/core';
import { Gamification } from 'src/app/classes/namespaces/gamification';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit, Gamification.GenericGamifiedComponents,Gamification.CRUD{
  
  constructor(private levelService:LevelService) {
  }
  ngOnInit() {
  }
  //#region EVENTS TO DEVELOP
    public OnUpdateExperience(_value:number){
      this.levelService.levelManager.OnExperienceReceived(_value); 
    }
    public OnLevelUp(){
      this.levelService.levelManager.OnUpgradeLevel();
    }
    public GetDataSource():Gamification.DocumentationInformation[]{
      return this.levelService.levelManager.GetElementData();
    }
    public GetColumns():string[]{
      return this.levelService.levelManager.GetColumns();
    }
    public GetLevel():string{
      return this.levelService.levelManager.currentLevel.toString();
    }
    public OnSetData(){
      throw new Error("Method should be implemented by the developerw.");
    }
    public OnRecoverData(){
      throw new Error("Method should be implemented by the developerw.");
    }
    OnSendData(): void {
      throw new Error("Method should be implemented by the developerw.");
    }
   
    
  //#endregion
  
  //#region CRUD 
  OnCreate(_object: Object) {
    throw new Error("Method not implemented.");
  }
  OnRead(_object: Object) {
    throw new Error("Method not implemented.");
  }
  OnUpdate(_object: Object) {
    throw new Error("Method not implemented.");
  }
  OnDelete(_object: Object) {
    throw new Error("Method not implemented.");
  }
  
  //#endregion  
  
}
