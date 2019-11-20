import { LevelService } from './../../services/level-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {
  
  constructor(private levelService:LevelService) {
   }

  ngOnInit() {
    const oneHundredPercentage:number = 1;
    //acessar banco de dados para setar as informações baseada nos dados recebidos do banco
    this.levelService.SetExponential(oneHundredPercentage + 0.6); // this values represents an percentage of the exponential factor
    this.OnSetInfo();
  }

  //#region EVENTS TO DEVELOP
    public OnUpdateExperience(_value:number){
      this.levelService.levelManager.OnExperienceReceived(_value); 
    }
    public OnLevelUpgrade(){
      this.levelService.levelManager.OnUpgradeLevel();
    }
    public OnSetInfo(){
     //access database to retrieve an json file
     this.levelService.levelManager.OnRecoverData(null); //automatically parses and set data 
    }
    
  //#endregion
  
}
