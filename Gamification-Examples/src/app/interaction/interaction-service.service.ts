import { User, DialogObject } from './interaction.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InteractionServiceService {
  nextLevelPoints:number;
  public service: InteractionServiceService;
  valueOfTheProgressBar:number;
  
  constructor() { 
    this.valueOfTheProgressBar= 0;
    this.nextLevelPoints= 200;
  }  
 
  
  public OnCreated(_actionName,_user:User):User{
    _user.atributes.Points += this.PointsHandler(_actionName,_user); 
    this.FillLevelBar(_actionName,_user);
    return _user;
  }
  public OnRegistered(_actionName,_user:User):User{
    _user.atributes.Points += this.PointsHandler(_actionName,_user);
    return _user;
  }
  public OnEngaged(_actionName,_user:User):User{
    _user.atributes.Points += this.PointsHandler(_actionName,_user);
    this.FillLevelBar(_actionName,_user);
    return _user;
  }
  // #region Area of Level

  /** Function that it`s used to upadte the current Experience Points of an user
  * @param  _actionName  Representation of the action the user performed
  * @returns Experience Points of that especific action
  */
  public LevelHandler(_actionName:string): number {
    switch (_actionName) {
      case " Plano de Aula ":
        return  200;
        break;
      case " Atividade ":
        return  200;
        break;
      case " Recursos Pedagógicos ":
        return  200;
        break;
      case " Avaliar ":
        return  100;
        break;
        case " Recomendar ":
        return  100;
        break;
      case " Comentar ":
        return  100;
        break;
      case " Favoritar ":
        return  100;
        break;
      case " Tipo de Recurso ":
        return  150;
        break;
      case " Melhorar ":
        return 100;
        break;
      case " Grupo de Execução ":
        return  150;
        break;
      case " Disciplina ":
        return  150;
        break;
      case " Professor ":
        return  150;
        break;
      case " Plano de Ensino ":
        return  400;
        break;
    }
  }

  /** 'Method that Level Up the User '
  * @param _user Object that represent the user
  * @returns The new current level of the user
  */
  public LevelUp(_user:User):number{
    return _user.atributes.Level +=1  ;
  }
  /** 'Method that update the maximum value of the progress bar'
  * @param _maximumLevel The current value of the progress bar
  * @returns The newest value of the current bar that it`s the older plus 60%
  */
  /** 'Method that fill the progress bar'
  * @param _actionName Name of the action that trigger the fulfillment of the progress bar
  * @returns return void, but perform some procedures
  */
  public FillLevelBar(_actionName:string,_user:User):void{
    let valueOfXp = this.LevelHandler(_actionName);
    this.valueOfTheProgressBar += ((valueOfXp/this.nextLevelPoints)*100); 
    do{
      if(this.valueOfTheProgressBar >= 100){
        // this.nextLevelPoints-this.valueOfTheProgressBar));
        this.ResetBar();
        _user.atributes.Level = this.LevelUp(_user);
        this.UpdateBar(this.nextLevelPoints);
        
      }
      valueOfXp--;
      _user.atributes.ExperiencePoints ++;  
    }while(valueOfXp>0)
    this.valueOfTheProgressBar.toPrecision(4);
    this.nextLevelPoints.toPrecision(4);
    console.log("Value of the player XP " + _user.atributes.ExperiencePoints);
    // let restingValue =  this.nextLevelPoints-this.valueOfTheProgressBar;
    // console.log("Resting Value" + restingValue);
    // this.valueOfTheProgressBar+=restingValue;
  }
  
  /**'Method that Level Up the User current Level'
  */
  
  
  /**'Method that reset the state of the bar in the animation'
  */
  public ResetBar():void{
    this.valueOfTheProgressBar=0;
  }
  
  /**'Method that makes the maximum level of the bar increase by 60%'
  */
  public UpdateBar(_maximumLevel:number):void{
    this.nextLevelPoints = _maximumLevel*1.6;
  }
  //#endregion
  
  // #region  Area of Points

  /** 'Method that reward the player with points for interacting with the System'
  * @param _actionName Represent the type of action that the user performed.
  * @param _user An object that represents the final user.
  * @returns Returns an number based into the action, this number is then returned to be summed with the current user pontuation multyplied by the user current Karma Points
  */
  public PointsHandler(_actionName:string, _user:User):number{
    let karmaPoints = this.GetCurrentKarmaPoints(_user);
    let points:number = 0;
    switch (_actionName) {
      case " Plano de Aula ":
        points += 200;
        break;
      case " Atividade ":
        points += 200;
        break;
      case " Recursos Pedagógicos ":
        points += 200;
        break;
      case " Avaliar ":
        points += 100;
        break;
        case " Recomendar ":
        points += 100;
        break;
      case " Comentar ":
        points += 100;
        break;
      case " Melhorar ":
        points += 100;
        break;
      case " Favoritar ":
        points += 100;
        break;
      case " Tipo de Recurso ":
        points += 150;
        break;
        case " Grupo de Execução ":
        points += 150;
        break;
        case " Disciplina ":
        points += 150;
        break;
        case " Professor ":
        points += 150;
        break;
      case " Plano de Ensino ":
        points += 400;
        break;
    }
    return points*karmaPoints;
  }

  /** 'Method used to create an Material Dialog Modal designed to be used when the player receive Points'
  * @param _values The ammount theof points the user has won
  * @returns An dialog Object Data ready to be shown to the user 
  */
  public GetCardContent(_values:number):DialogObject{
    let dialogContent = new DialogObject();
    dialogContent.atributes.Title = "Pontos Recebidos";
    dialogContent.atributes.Content = _values.toString();
    return dialogContent;
  }


  //#endregion

  // #region Karma   
  
  /** 'Method that increment the User Karma Points '
  * @param _user Object that represents the final User
  * @returns The user newest Karma Points that were operated 
  */
  public ChangeKarma(_actionName:string):number{
    if(_actionName == "Incrementar Karma"){
      return 0.2;
    }
    else{
      return -0.2;
    }
  }

  /** 'Method that take the user current Karma Points'
  * @param _user Object that represents the final user
  * @returns The user current Karma Points
  */
  public GetCurrentKarmaPoints(_user:User):number{
    return _user.atributes.KarmaPoints;
  }
  //#endregion

  // #region Area of Help Box

  /** 'Method that Get info from service to display into an Dialog Modal when the user utilize the HelpBox'
  * @param _actionName The Help Box Button Name
  * @returns The content to be displayed inside the Dialog Modal
  */
  public GetInfoToDialogInHelpBox(_actionName:string): DialogObject{
    let dialogContent = new DialogObject();
    dialogContent.atributes.Title = _actionName;
    switch (_actionName) {
      case "Criar Plano de Aula":
        dialogContent.atributes.Content = "Nessa área o usuário cria seus planos de aula";
        break;
      case "Criar Recurso Pedagógico":
        dialogContent.atributes.Content = "Nessa área o usuário cria recursos Pedagógicos";
        break;
      case "Avaliar":
        dialogContent.atributes.Content = "Nessa área o usuário Avalia";
        break;
      case "Comentar":
        dialogContent.atributes.Content = "Nessa área o usuário Comenta";
        break;
      case "Favoritar":
        dialogContent.atributes.Content = "Nessa área o usuário Favorita";
        break;
      case "Cadastrar Recurso Pedagógico":
        dialogContent.atributes.Content = "Nessa área o usuário cadastra Recursos Pedagógicos";
        break;
      case "Criar Plano de Ensino":
        dialogContent.atributes.Content = "Nessa área ao usuário cria Planos de Ensino";
        break;
    }
    return dialogContent;
  }
  //#endregion
}
