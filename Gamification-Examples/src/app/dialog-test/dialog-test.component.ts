import{MatDialogRef} from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-test',
  templateUrl: './dialog-test.component.html',
  styleUrls: ['./dialog-test.component.css']
})
export class DialogTestComponent implements OnInit {

  constructor(public dialogBox :MatDialogRef<DialogTestComponent>) { }

  ngOnInit() {
  }
  
  OnClose(){
    this.dialogBox.close();
  }
  
}
