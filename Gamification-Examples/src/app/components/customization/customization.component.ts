import { OverlayContainer } from '@angular/cdk/overlay';
import { AppComponent } from './../../app.component';
import { ConfigurationService } from './../../services/configuration.service';
import { Component, OnInit, HostBinding, EventEmitter } from '@angular/core';
import { CustomizationService } from '../../services/customization.service';
import { Gamification } from '../../classes/namespaces/gamification';
import { Observable } from 'rxjs';

const THEME_DARKNESS_SUFFIX = `-dark`
@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.css']
})
export class CustomizationComponent implements OnInit {

  @HostBinding('class') activeThemeCssClass: string
  activeTheme: string = "indigo-pink";
  isThemeDark: boolean=false;

  themeEvent = new EventEmitter();

  constructor(private customizationService: CustomizationService, private configuration: ConfigurationService, private overlayContainer: OverlayContainer) {

  }

  ngOnInit() {
    this.customizationService.customizationManager.colorSwapper.color = [
      { value: "red", viewValue: "Red" },
      { value: "green", viewValue: "Green" },
      { value: "blue", viewValue: "Blue" },
      { value: "purple", viewValue: "Purple" },
      { value: "pink", viewValue: "Pink" },
    ]
    // this.configuration.currentDarkness.subscribe(darktheme => this.isThemeDark = darktheme);
    this.SetActiveTheme(this.activeTheme,this.isThemeDark);
    // this.configuration.currentColor.subscribe(Color => this.color = Color);
  }
  //#region VIEWER

  public GetDataSource(): Gamification.DocumentationInformation[] {
    return this.customizationService.customizationManager.GetElementData();
  }
  public GetColumns(): string[] {
    return this.customizationService.customizationManager.GetColumns();
  }
  public GetColor(): Gamification.Colors[] {
    return this.customizationService.customizationManager.colorSwapper.color;
  }
  public GetTitles(): Gamification.Colors[] {
    return this.customizationService.customizationManager.titleSwapper.titles;
  }
  public ToggleDarkTheme(_dark: boolean): void {
    // this.configuration.SetDarkness(_dark);
    this.isThemeDark = _dark;
    this.themeEvent.emit({
      tema:this.activeTheme,
      modo:this.isThemeDark
    })
  }
  public UpdateColorTheme(_color: string): void {
    // this.configuration.SetColor(_color);
    this.activeTheme = _color;
    this.themeEvent.emit({
      tema:this.activeTheme,
      modo:this.isThemeDark
    })
  }

  public SetActiveTheme(theme: string, darkness: boolean = null) {
    if (darkness === null) {
      darkness = this.isThemeDark
    }
    else if (this.isThemeDark === darkness) {
      if (this.activeTheme === theme) {
        return
      }
    } else {
      this.isThemeDark = darkness
    }
    this.activeTheme = theme
    const cssClass = darkness === true ? theme + THEME_DARKNESS_SUFFIX : theme
    const classList = this.overlayContainer.getContainerElement().classList
    if (classList.contains(this.activeThemeCssClass)) {
      classList.replace(this.activeThemeCssClass, cssClass)
    }
    else {
      classList.add(cssClass)
    }
    this.activeThemeCssClass = cssClass
  }


  //#endregion

  //#region EVENTS
  public OnRecoverData(): void { }
  public OnSetData(): void { }
  public OnChangeColor(): void { }
  public OnSetMode(): void { }
  public OnChangeSVG(): void { }
  public OnChangeTitle(): void { }
  //#endregion


}
