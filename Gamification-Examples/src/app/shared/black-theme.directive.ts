import { AppComponent } from './../app.component';
import { Directive, HostBinding, SimpleChange, OnChanges, HostListener } from '@angular/core';

@Directive({
  selector: '[BlackTheme]'
})
export class BlackThemeDirective{

  @HostBinding('class.dark-theme') private darkTheme: boolean = false;
  constructor() { }

}
