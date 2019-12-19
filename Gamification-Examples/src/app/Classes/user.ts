import { Medals } from './medals';
// import { DescriptionGenerator } from './description-generator';
// import { Content } from './content';
// import { Description } from './description';
import { Missions } from './../Classes/missions';
// import { ContentGenerator } from './content-generator';

/**
 * Class used to represent an user,
 * 
 * Full Name: {@link User:class}
 * 
 * @var points  Total amount of Points that the user possess
 * 
 * @var  level in Total
 * 
 * @var karmaPoints  Multiplier for the points
 * 
 * @var experiencePoints Total amount of experience of an user.
 * 
 * @var atributes Object that is used to hold references to the User status inside the system
 */

export class User{
  public points:number;
  public level:number;
  public karmaPoints:number;
  public experiencePoints:number;
  public educoin:number;
  public medals:Medals[]; 
  public missions:Missions[];
  // private description: Description;
  // private contents:Content[];

  public atributes = {
    Points:this.points,
    ExperiencePoints:this.experiencePoints,
    Level:this.level,
    KarmaPoints:this.karmaPoints,
    Educoin:this.educoin,
    Medall:this.medals,
  }
  constructor(){
    this.atributes.Points = 0;
    this.atributes.Level = 0;
    this.atributes.Educoin = 0;
    this.atributes.ExperiencePoints = 0;
    this.atributes.KarmaPoints = 1;
    let firstMedal = new Medals("Bem vindo a Rede Educa", "Medalha dada como boas vindas ao usuário da rede Educa.");
    this.atributes.Medall = [firstMedal];
    
    console.log("User finished to be created");
  }

  //#region Getter & Setter
  public GetPoints():number{
    return this.points;
  }
  public GetLevel():number{
    return this.level;
  }
  public GetExperience():number{
    return this.experiencePoints;
  }
  public GetKarmaPoints():number{
    return this.karmaPoints;
  }
  public GetCoin():number{
    return this.educoin;
  }
  //#endregion

  public AddMedal(_medal:Medals):void{
    this.medals.push(_medal);
    console.log("Medal was pushed");
  }
  public AddMission(_mission:Missions):void{
    this.missions.push(_mission);
    console.log("Mission was added succesfully");
  }
  public GetMission(_missionName:string):Missions{
    for (let index = 0; index < this.missions.length; index++) {
      if(_missionName == this.missions[index].name)
      return this.missions[index];
    }
  }
  // public CreateContent(_name:string,_subject:string,_content:string,_valueLike:number,_valueDownloads:number):void{
  //   let content = new Content(_name,_subject,_content,_valueLike,_valueDownloads);
  //   this.AddContent(content);
  // }
  // public AddContent(_content:Content):void{
  //   this.contents.push(_content);
  // }
}