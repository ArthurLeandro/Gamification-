import { MissionService } from './../../services/mission.service';
import { Component, OnInit } from '@angular/core';
import { Gamification } from 'src/app/classes/namespaces/gamification';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit, Gamification.GenericGamifiedComponents, Gamification.CRUD {

  missions;

  constructor(private missionService: MissionService) { }

  ngOnInit() {
    this.missionService.CreateMissions();
    this.missions = this.missionService.missionManager.allMissions;
  }

  public OnIncrease(event) {
    let returnedMission = this.GetMission(event);
    returnedMission.currentAmount++;
  }
  public OnConclude(event) {
    let returnedMission = this.GetMission(event);
    if (returnedMission.state != Gamification.StateOfMissions.FINISHED) {
      if (returnedMission.currentAmount >= returnedMission.amountToComplete) {
        returnedMission.state = Gamification.StateOfMissions.FINISHED;
        returnedMission.name += " " + returnedMission.state;
      }
    }
  }
  public GetMission(identifier: any): Gamification.Missions {
    return this.missionService.missionManager.GetMission(identifier);
  }

  //#region VIEWER
  public GetDataSource(): Gamification.DocumentationInformation[] {
    return this.missionService.missionManager.GetElementData();
  }
  public GetColumns(): string[] {
    return this.missionService.missionManager.GetColumns();
  }

  public OnSetData() {
    throw new Error("Method should be implemented by the developerw.");
  }
  public OnRecoverData() {
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
