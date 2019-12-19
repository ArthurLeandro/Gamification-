import { DialogTestComponent } from './../modals-dialogs-pop-ups/dialog/dialog-test/dialog-test.component';
import { DialogPointsComponent } from './../modals-dialogs-pop-ups/dialog/dialog-points/dialog-points.component';
import { MatDialog } from '@angular/material';
import { InteractionServiceService } from './../../services/interaction-service.service';
import { User } from '../../classes/user';
import { Component, OnInit } from '@angular/core';
import { Gamification } from 'src/app/classes/namespaces/gamification';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})

export class InteractionComponent implements OnInit,Gamification.GenericGamifiedComponents, Gamification.CRUD {
  public user:User;
  constructor(private interactionService:InteractionServiceService,public dialog: MatDialog){}

  ngOnInit() {
    this.user = new User();    
  }

  //#region Users Action
  //#region VIEWER

  public GetDataSource(): Gamification.DocumentationInformation[] {
    return this.interactionService.interactionManager.GetElementData();
  }
  public GetColumns(): string[] {
    return this.interactionService.interactionManager.GetColumns();
  }
  public OpenRewardDialog():void{
    let dialog = this.dialog.open(DialogPointsComponent,{});
    dialog.afterClosed().subscribe(result=>
      (console.log("The dialog was closed."))
    );
  }
  public OpenAwardDialog():void{
    let dialog = this.dialog.open(DialogTestComponent,{});
    dialog.afterClosed().subscribe(result=>
      (console.log("The dialog was closed."))
    );
  }
  //#endregion
  //#region EVENTS TO DEVELOP
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
