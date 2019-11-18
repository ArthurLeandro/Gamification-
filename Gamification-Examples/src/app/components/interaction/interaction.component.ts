import { User } from '../Classes/user';import { InteractionServiceService } from './interaction-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})

export class InteractionComponent implements OnInit {
  user:User;
  public service: InteractionServiceService;
  
  constructor(){}

  ngOnInit() {
    this.service = new InteractionServiceService();
    this.user = new User();
  }

  //#region Users Action
  
  public OnCreation(_event:any):void{
    let _actionName = InteractionComponent.GetNameOfCaller(_event);
    this.user = this.service.OnCreated(_actionName,this.user);
    console.log("User Points " + this.user.atributes.Points);
    console.log("User Experience Points "+ this.user.atributes.ExperiencePoints);
  }
  public OnRegistered(_event:any){
    let _actionName = InteractionComponent.GetNameOfCaller(_event);
    this.user =  this.service.OnRegistered(_actionName,this.user);
    console.log("User Points " + this.user.atributes.Points);
    console.log("User Experience Points "+ this.user.atributes.ExperiencePoints);
  }
  public OnEngaged(_event:any){
    let _actionName = InteractionComponent.GetNameOfCaller(_event);
    this.user =  this.service.OnEngaged(_actionName,this.user);
    console.log("User Points " + this.user.atributes.Points);
    console.log("User Experience Points "+ this.user.atributes.ExperiencePoints);
  }
  public OnKarmaChange(_event:any):void{
    let _actionName = InteractionComponent.GetNameOfCaller(_event);
    this.user.atributes.KarmaPoints += this.service.ChangeKarma(_actionName);
    if(this.user.atributes.KarmaPoints <= 0)
      this.user.atributes.KarmaPoints = 0.1;
  }

  //#endregion
  public static GetNameOfCaller(_event:any):string{
    let _actionName = _event.target.textContent;
    if(_actionName!= null ||_actionName!= undefined )
      return _actionName;
    else
      return null;
  }

}





/** Class used to compress the content of the Material Dialog Modal
 * 
 * @var title Represent the Title of an Material Dialog Modal
 * 
 * @var content Represent the Content of an Material Dialog Modal
 * 
 * @var atributes Object that is used to feed an Material Dialog Modal
 * 
 */
export class DialogObject
{
  private title;
  private content;
  public atributes = {
    Title: this.title,
    Content: this.content
  }
  constructor(){
    this.title = "Title";
    this.content = "Content";
  }
}
