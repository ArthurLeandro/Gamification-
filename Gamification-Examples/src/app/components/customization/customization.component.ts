import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.css']
})
export class CustomizationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //#region EVENTS
    public OnRecoverData():void{}
    public OnSetData():void{}
    public OnChangeColor():void{}
    public OnSetMode():void{}
    public OnChangeSVG():void{}
    public OnChangeTitle():void{}
  //#endregion
  

}
