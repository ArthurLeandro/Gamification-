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
  private points:number;
  private level:number;
  private karmaPoints:number;
  private experiencePoints:number;
  private educoin:number;
  private medals:Medals[]; 
  private missions:Missions[];
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
    //description that may come along by randomizing
    // if(_description != null || _description != undefined){
    //   console.log("_description wasnt null");
    //   this.description.name = _description.DescriptionObject.Name;
    //   this.description.profession = _description.DescriptionObject.Profession;
    //   this.description.school = _description.DescriptionObject.School;
    //   this.description.discipline[0] = _description.DescriptionObject.Discipline;
    // }
    // //content that may come along by randomizing
    // if(_content != null || _content!= undefined){
    //   console.log("_content wasnt null");
    //   this.contents[0].name = _content.ContentObject.Name;
    //   this.contents[0].subject = _content.ContentObject.Subject;
    //   this.contents[0].contentInIt = _content.ContentObject.Content;
    //   this.contents[0].likes = _content.ContentObject.Likes;
    //   this.contents[0].downloads = _content.ContentObject.Downloads;
    // }
    console.log("User finished to be created");
  }
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