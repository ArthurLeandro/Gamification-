import { Component, OnInit } from '@angular/core';
import {MatButtonModule,MatToolbarModule,MatIconModule,MatCardModule,MatDialog,MatDialogConfig} from '@angular/material';
import { DialogTestComponent } from '../dialog-test/dialog-test.component';
@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    
  }

  OpenDialogById(){
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = "70%";
    this.dialog.open(DialogTestComponent);
  }
}