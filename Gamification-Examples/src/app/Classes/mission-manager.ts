import { User } from './user';
import { TypeOfObjective } from './objective';
import { Missions } from './missions';
import { Reward } from './reward';
export class MissionManager {
  
  public FinishMission(_mission:Missions,_valueToCompareToMission:number,_typeOfObjective:TypeOfObjective,_user:User):void{
    if(_mission.Concluded(_valueToCompareToMission,_typeOfObjective)){
      _mission.concluded = true;
      let reward = this.ExtractReward(_mission);
      let flag:boolean;
      do{
        this.GiveRewardToUser(reward,_user);
      }while(flag == false)
    }
  }
  public ExtractReward(_mission:Missions):Reward{
    let reward:Reward = _mission.GetReward();
    return reward;
  }

  public GiveRewardToUser(_reward:Reward,_user:User):boolean{
    if(_reward instanceof Reward ){
      _user.atributes.Points+=_reward.atributes.Points;
      _user.atributes.ExperiencePoints+=_reward.atributes.ExperiencePoints;
      _user.atributes.Educoin+=_reward.atributes.Educoin;
      _user.AddMedal(_reward.medal);
      console.log("Reward was delivered");
      return true;
    }
    else {
      return false;
    }
  }
  public DeliverMissionToUser(_mission:Missions,_user:User):void{
    _user.AddMission(_mission);
  }
  public GetInfoFromMission(_missionName:string,_user:User):Missions{
    let mission = _user.GetMission(_missionName);
    return mission;
  }
}
