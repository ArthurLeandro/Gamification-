//#region Angular Directives
import { Injectable } from '@angular/core';
//#endregion

//#region My-Own-Components
import { Gamification } from './../classes/namespaces/gamification';
//#endregion

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  missionManager: Gamification.MissionManager;
  constructor() {
    this.missionManager = new Gamification.MissionManager();
  }


  public CreateMissions(): void {
    if(this.missionManager.allMissions[0]!=undefined){
      if(this.missionManager.allMissions[0].name == "1° Missão"){
        return;
      }
    }
    for (let i = 1; i < 8; i++) {
      let reward = new Gamification.Reward(
        (100*i),
        (200*i),
        1.0,
        Gamification.TypeOfReward.REWARD
      );
      let mission: Gamification.Missions = new Gamification.Missions(
        i.toString()+ "° Missão",
        i,
        i*10,
        "Esta é a "+ i.toString()  +"° missão",
        Gamification.StateOfMissions.AVALIABLE,
        Gamification.TypeOfObjective.NORMAL,
        reward
      );
      this.missionManager.OnMissionsReceived(mission);
    }


  }
}
