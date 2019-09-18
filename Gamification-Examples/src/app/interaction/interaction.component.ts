import { DialogPointsComponent } from './../dialog-points/dialog-points.component';
import { MatDialog, MatDialogRef,MatDialogConfig } from '@angular/material';
import { InteractionServiceService } from './interaction-service.service';
import { Component, OnInit, ViewChild, ElementRef,ViewChildren,QueryList } from '@angular/core';
import{AngularMaterialModule} from '../angular.material.module';


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
    let _actionName = this.GetNameOfCaller(_event);
    this.user = this.service.OnCreated(_actionName,this.user);
    console.log("User Points " + this.user.atributes.Points);
    console.log("User Experience Points "+ this.user.atributes.ExperiencePoints);
  }
  public OnRegistered(_event:any){
    let _actionName = this.GetNameOfCaller(_event);
    this.user =  this.service.OnRegistered(_actionName,this.user);
    console.log("User Points " + this.user.atributes.Points);
    console.log("User Experience Points "+ this.user.atributes.ExperiencePoints);
  }
  public OnEngaged(_event:any){
    let _actionName = this.GetNameOfCaller(_event);
    this.user =  this.service.OnEngaged(_actionName,this.user);
    console.log("User Points " + this.user.atributes.Points);
    console.log("User Experience Points "+ this.user.atributes.ExperiencePoints);
  }
  public OnKarmaChange(_event:any):void{
    let _actionName = this.GetNameOfCaller(_event);
    this.user.atributes.KarmaPoints += this.service.ChangeKarma(_actionName);
    if(this.user.atributes.KarmaPoints <= 0)
      this.user.atributes.KarmaPoints = 0.1;
  }

  //#endregion
  public GetNameOfCaller(_event:any):string{
    let _actionName = _event.target.textContent;
    return _actionName;
  }

}

/**
 * Class used to represent an user,
 * 
 * Full Name: {@link User:class}
 * 
 * @var points  Total amount of Points that the user possess
 * 
 * @var  The level in Total
 * 
 * @var karmaPoints  Multiplier for the points
 * 
 * @var experiencePoints Total amount of experience of an user.
 * 
 * @var atributes Object that is used to hold references to the User status inside the system
 */

export class User
{
  private points:number;
  private level:number;
  private karmaPoints:number;
  private experiencePoints:number;
  public atributes = {
    Points:this.points,
    ExperiencePoints:this.experiencePoints,
    Level:this.level,
    KarmaPoints:this.karmaPoints
  }
  
  constructor(){
    this.atributes.Points = 0;
    this.atributes.Level = 0;
    this.atributes.ExperiencePoints = 0;
    this.atributes.KarmaPoints = 1;
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


