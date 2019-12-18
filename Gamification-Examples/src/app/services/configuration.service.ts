import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  
  private darkMode = new Subject<boolean>();
  currentDarkness = this.darkMode.asObservable();
  
  private color = new Subject<string>();
  currentColor = this.color.asObservable();
  // constructor() { }

  public SetDarkness(_mode:boolean){
    this.darkMode.next(_mode);
  }
  public SetColor(_color:string){
    this.color.next(_color);
    console.log("Change were made to the color");
  }
  
}
