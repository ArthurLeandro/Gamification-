import { ConfigurationService } from './services/configuration.service';
import { Component, HostBinding, OnInit ,OnChanges,SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';


const THEME_DARKNESS_SUFFIX = `-dark`

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit{

  title = 'Gamification-Examples';

  @HostBinding('class') activeThemeCssClass: string
  activeTheme: string
  isThemeDark:boolean;
  @HostBinding('class.dark-theme') isDark: boolean = false;
  // @HostBinding() color: string = "indigo";

  constructor(private configuration: ConfigurationService, private overlayContainer: OverlayContainer) {
  }
  ngOnInit() {
    this.configuration.currentDarkness.subscribe(darktheme => this.isDark = darktheme);
    // this.configuration.currentColor.subscribe(Color => this.color = Color);
    this.SetActiveTheme('indigo-pink',false)
  }
  public SetActiveTheme(theme: string, darkness: boolean = null) {
    if (darkness === null){
      darkness = this.isThemeDark
    }
    else if (this.isThemeDark === darkness) {
      if (this.activeTheme === theme) {
        return
      }
    } else{
      this.isDark = darkness
    }
    this.activeTheme = theme
    const cssClass = darkness === true ? theme + THEME_DARKNESS_SUFFIX : theme
    const classList = this.overlayContainer.getContainerElement().classList
    if (classList.contains(this.activeThemeCssClass)){
      classList.replace(this.activeThemeCssClass, cssClass)
    }
    else{
      classList.add(cssClass)
    }
    this.activeThemeCssClass = cssClass
  }
  public Splitter(data:any){
    if(data!==null){
      this.activeTheme =  data.tema;
      this.isThemeDark = data.modo;
      this.SetActiveTheme(this.activeTheme,this.isThemeDark);
    }
  }


}

