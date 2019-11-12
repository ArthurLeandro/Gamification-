import { Objective, TypeOfObjective, TypeOfAction } from './objective';
import { Reward } from './reward';

enum typeOfMission{
  SAZIONAL,COMMON,EVENTUAL
}

export class Missions {
  public type:typeOfMission;
  objective:Objective;
  reward:Reward;
  name:string;
  description:string;
  concluded: boolean;
  
  public constructor(_name:string,_description:string,_type:typeOfMission,_pointsReward:number,_experiencePointsReward:number,_educoinsReward:number,
    _medalNameReward:string,_medalDescriptionReward:string, //medals
    _valueOfObjective:number,_typeOfObjective:TypeOfObjective,_typeOfAction:TypeOfAction // objective
    ){
    this.reward = new Reward(_pointsReward,_experiencePointsReward,_educoinsReward,_medalNameReward,_medalDescriptionReward);
    this.objective = new Objective(_valueOfObjective,_typeOfObjective,_typeOfAction);
    this.name = _name;
    this.description = _description;
    this.concluded = false;
    this.type = _type;
  }

  public GetStatus():boolean{
    return this.concluded;
  }
  public GetName():string{
    return this.name;
  }
  public GetDescription():string{
    return this.description;
  }
  public GetReward():Reward{
    return this.reward;
  }
  public Concluded(_value:number,_typeOfObjective:TypeOfObjective):boolean{
    if(_typeOfObjective == this.objective.objective){
      if(_value >= this.objective.value){
        return true;
      }
      else{
        console.log("Não tinha um objetivo bem definido.");
        return false;
      }
    }
    else{
    return false;
    }
  }
}

export class SazonalMission extends Missions{
  date:Date;
  isOppened:boolean;
  
  constructor(_name:string,_description:string,_type:typeOfMission,_pointsReward:number,_experiencePointsReward:number,_educoinsReward:number,
    _medalNameReward:string,_medalDescriptionReward:string, //medals
    _valueOfObjective:number,_typeOfObjective:TypeOfObjective,_typeOfAction:TypeOfAction // objective
    ,_dayOfTheDate:number,_monthOfTheDate:number){//specific to this class
   super(_name,_description,_type,_pointsReward,_experiencePointsReward,_educoinsReward
    ,_medalNameReward,_medalDescriptionReward,_valueOfObjective,_typeOfObjective,_typeOfAction);
    this.date.setMonth(_monthOfTheDate);
    this.date.setDate(_dayOfTheDate);
  }
  public Concluded(_value:number,_typeOfObjective:TypeOfObjective):boolean{
    if(Date.prototype.getDay() != this.date.getDay()){
      if(Date.prototype.getMonth() != this.date.getMonth()){
        return false;
      }
      return false;
    }
    //different date so...

    if(_typeOfObjective == this.objective.objective){
      if(_value >= this.objective.value){
        return true;
      }
      else{
        console.log("Não tinha um objetivo bem definido.");
        return false;
      }
    }
    else{
    return false;
    }
  }
}

export class EvetsMission extends Missions{
  date:Date;
  constructor(_name:string,_description:string,_type:typeOfMission,_pointsReward:number,_experiencePointsReward:number,_educoinsReward:number,
    _medalNameReward:string,_medalDescriptionReward:string, //medals
    _valueOfObjective:number,_typeOfObjective:TypeOfObjective,_typeOfAction:TypeOfAction // objective
    ,_dayOfTheDate:Date){
   super(_name,_description,_type,_pointsReward,_experiencePointsReward,_educoinsReward
    ,_medalNameReward,_medalDescriptionReward,_valueOfObjective,_typeOfObjective,_typeOfAction);
    this.date = _dayOfTheDate;
  }
}
