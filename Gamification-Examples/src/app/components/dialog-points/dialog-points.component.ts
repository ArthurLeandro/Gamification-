import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-points',
  templateUrl: './dialog-points.component.html',
  styleUrls: ['./dialog-points.component.css']
})
export class DialogPointsComponent implements OnInit {

  private title:string;
  private content:string;
  constructor() { }

  ngOnInit() {
  }
  public UpdateContent(_title:string,_content:string):void{
    this.title = _title;
    this.content = _content;
  }

}
