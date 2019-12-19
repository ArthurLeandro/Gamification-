import { Component, OnInit,Injectable } from '@angular/core';

import{MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-dialog-test',
  templateUrl: './dialog-test.component.html',
  styleUrls: ['./dialog-test.component.css']
})
export class DialogTestComponent implements OnInit {

  title:           string = "Título";
  textToBeShowned: string = "Texto que vai aparecer";
  path:string = "assets/images/award.png";
  constructor(public dialogBox :MatDialogRef<DialogTestComponent>) { 
    
  }

  ngOnInit() {
    
  }
  
  OnClose(){
    this.dialogBox.close();
  }

  
}
