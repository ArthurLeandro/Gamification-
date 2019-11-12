import { Medals } from './medals';
export class Reward {
  points:number;
  experiencePoints:number;
  educoin:number;
  medal:Medals;
  public atributes={
    Points : this.points,
    ExperiencePoints:this.experiencePoints,
    Educoin:this.educoin,
    MedalsInThisReward:this.medal
  }
  constructor(_points:number,_experiencePoints:number,_educoin:number, _medalName:string, _medalDescription:string){
    this.points = _points;
    this.experiencePoints =  _experiencePoints;
    this.educoin = _educoin;
    this.medal = new Medals(_medalName,_medalDescription);
  }
}

