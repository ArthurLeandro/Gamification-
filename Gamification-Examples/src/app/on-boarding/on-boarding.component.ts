import { Component, OnInit } from '@angular/core';
import{MatDialog} from '@angular/material';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.css']
})
export class OnBoardingComponent  {

  constructor(public dialog: MatDialog) { }

  // OpenDialog():void {
  // let dialogModal = this.dialog.open({} );
  // dialogModal.afterClosed().subscibe(result=>{
  //   console.log('Dialog was closed');
  // });
  // }

}
