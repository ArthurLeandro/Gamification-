import { Component, OnInit } from '@angular/core';
import {MatButtonModule,MatToolbarModule,MatIconModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import{RouterModule} from '@angular/router' ;

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
