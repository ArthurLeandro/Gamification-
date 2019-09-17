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
  nextLevelPoints:number = 200;  
  dialogContent:DialogObject;
  dialogMaterial:DialogPointsComponent;
  public service: InteractionServiceService;

  valueOfTheProgressBar:number = 0;
  actionName:string;
  @ViewChild('mat-raised-button', {read:ElementRef}) buttonsInHTML: ElementRef;
  
  // constructor(public dialogReference:MatDialogRef<DialogPointsComponent>,public dialog: MatDialog) {
  constructor(){
    this.service = new InteractionServiceService();
    this.user = new User();
    this.dialogContent = new DialogObject();
    this.dialogMaterial = new DialogPointsComponent();
  }

  ngOnInit() {
    const interaction = new InteractionComponent(); 
  }
  //#region User Interaction
  public OnPerformAction(_actionName:string):void {
    this.actionName = _actionName;
  }
  //#endregion

  //#region  Area of Level
  
  /** 'Method that fill the progress bar'
  * @param _actionName Name of the action that trigger the fulfillment of the progress bar
  * @returns return void, but perform some procedures
  */
  public FillLevelBar(event:any):void{
    let _actionName = event.target.textContent;
    let valueOfXp = this.service.LevelHandler(_actionName);
    this.valueOfTheProgressBar += ((valueOfXp/this.nextLevelPoints)*100); 
    do{
      if(this.valueOfTheProgressBar >= 100){
        
        this.ResetBar();
        this.LevelUpUser();
        this.UpdateBar();
      }
      valueOfXp--;
      this.user.atributes.ExperiencePoints ++;  
    }while(valueOfXp>0)
    this.valueOfTheProgressBar.toPrecision(4);
    this.nextLevelPoints.toPrecision(4);
    // let restingValue =  this.nextLevelPoints-this.valueOfTheProgressBar;
    // console.log("Resting Value" + restingValue);
    // this.valueOfTheProgressBar+=restingValue;
  }
  
  /**'Method that Level Up the User current Level'
  */
  public LevelUpUser():void{
    this.user.atributes.Level = this.service.LevelUp(this.user);
  }
  
  /**'Method that reset the state of the bar in the animation'
  */
  public ResetBar():void{
    this.valueOfTheProgressBar=0;
  }
  
  /**'Method that makes the maximum level of the bar increase by 60%'
  */
  public UpdateBar():void{
    this.nextLevelPoints = this.service.UpdateLevelPointsMaximum(this.nextLevelPoints);
  }
  //#endregion
   
  // #region Area of Points

  /** 'Method that display the points received inside a Modal'
  * @param _value The ammount of Points received 
  * @returns It is a procedure so it does not return any data.
  */
  public ShowPointsReceivedCard(_value:number):void{
    this.dialogContent = this.service.GetCardContent(_value);
    this.PutContentInsideDialog(this.dialogContent);
    //passar o conteudo de dialog content para o Mat Dialog
    //Abri o Mat Dialog
  }
  /** 'Method that put content into the Dialog Object Data so that the Modal can be shown correctly.'
  * @param _content The Dialog Object that it`s gonna be updated to be shown inside the Modal.
  * @returns It´s a procedure so it doesn`t return nothing.
  */
  public PutContentInsideDialog(_content:DialogObject):void{
    this.dialogMaterial.UpdateContent(_content.atributes.Title,_content.atributes.Content);
  }
  /** 'Method that update the current points of the user.'
  * @param _value It is the value that is gonna be incremented to the user points.ButtonCenter
  * @returns It is a procedure so it does not return nothing but it adds the value to the user points.
  */
  public UpdateUserPoints(event:any):void{
    let _actionName = event.target.textContent;
    this.user.atributes.Points += this.service.PointsHandler(_actionName,this.user);
  }
  
  //#endregion
  
  // #region  Area of Karma

  
  /** 'Method that dislay the karma Multyplier inside an Material Dialog Modal.'
  * @param _valueOfKarma The value of the user current Karma Points that were transformed to string prepared to be show into the modal.ButtonCenter
  * @returns It only puts the value of the Karma into the content of the Dialog Object Data. 
  */
  public ShowKarmaMultyplier(_valueOfKarma:number):void{
    this.dialogContent.atributes.Content += _valueOfKarma.toString();
  }
  public IncreaseKarma():void {
    this.user.atributes.KarmaPoints = this.service.IncreaseKarmaPoints(this.user);
  }
  public DecreaseKarma():void {
    this.user.atributes.KarmaPoints = this.service.DecreaseKarmaPoints(this.user);
    if(this.user.atributes.KarmaPoints <= 0){
      this.user.atributes.KarmaPoints = 0.1;
    }
  }
    //#endregion
  
  // #region Area of Help Box
  
  /** 'Method that display a material Dialog'
  * @param _actionName The Name of the action for the servic to retrieve the correct content to be displayed
  * @returns It is a procedure so it does not returns nothing
  */
  // public OpenDialog(_actionName:string):void{
  //   this.dialogContent = this.service.GetInfoToDialogInHelpBox(_actionName);
  //   this.PutContentInsideDialog(this.dialogContent);
  //   const matConfig = new MatDialogConfig();
  //   this.dialog.open(DialogPointsComponent,matConfig);
  // }

  /**'Method used to close the Material Dialog Modal that were opened.'
  */
  // public CloseDialog():void{
  //   this.dialogReference.close();
  // }
  //#endregion

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


