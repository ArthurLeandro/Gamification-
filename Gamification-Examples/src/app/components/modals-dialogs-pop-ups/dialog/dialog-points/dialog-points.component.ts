import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-points',
  templateUrl: './dialog-points.component.html',
  styleUrls: ['./dialog-points.component.css']
})
export class DialogPointsComponent implements OnInit {

  private title:string;
  private content:string;
  path:string="assets/images/medalha.png";
  constructor(public dialogBox :MatDialogRef<DialogPointsComponent>) { }

  ngOnInit() {
  }
  public UpdateContent(_title:string,_content:string):void{
    this.title = _title;
    this.content = _content;
  }
  OnClose(){
    this.dialogBox.close();
  }

}
