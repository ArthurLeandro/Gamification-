import { DesignPatterns } from './design-patterns';
import { DataStructure } from './data-structures';

export namespace Gamification {

  //#region All Enums
  export enum TypeOfGamification {
    TUTORIAL,
    BLOCK,
    CUSTOMIZATION,
    MEDALS,
    AWARDS,
    COINS,
    POINTS,
    KARMA,
    REPUTATION,
    COMUM_MISSION,
    SAZONAL_MISSION,
    CO_OP_MISSION,
    RANKING,
    LEVEL,
    NOT_DEFINED_YET
  }
  export enum TypeOfData {
    RANKING_ENTRY,
    USER
  }
  export enum TypeOfReward {
    REWARD,
    AWARD
  }
  export enum StateOfMissions {
    FINISHED,
    STARTED,
    AVALIABLE,
    DISABLE
  }
  export enum TypeOfSwap {
    COLOR,
    MODE,
    SVG,
    TITLE
  }
  export enum TypeOfSort {
    MERIT,
    ENGAGEMENT
  }
  //#endregion

  //#region All Interfaces
  export interface DataRetrivedInLevel {
    level: number;
    experience: number;
  }
  export interface BasicDescription {
    discipline: string;
    school: string;
    author: string;
    //typeOfAction:string;
  }
  export interface BasicEngagement extends BasicDescription {
    numberOfDownloads: number;
    numberOfFavorites: number;
    name: string;
    //averageOfStars(): number;
  }
  export interface Merit extends BasicDescription {
    followers: number;
    posts: number;
    likes: number;
  }
  export interface RankingConfigSortable {
    entriesData: DataStructure.List.List<RankingEntry>;
    displayedColumns;
  }
  export interface RankingEntry {
    //createAnObject(): any;
  }
  export interface MeritRankingEntry extends RankingEntry, Merit {
  }
  export interface EngagementRankingEntry extends RankingEntry, BasicEngagement {
  }
  //#endregion

  //#region Base Class for all Gamification
  /** Base Class for all of Gamifications
   * 
   * Implements ISingleton
  */
  export class Gamification implements DesignPatterns.SingletonDesignPattern.ISingleton {
    instance: Gamification;
    typeOfGamification: TypeOfGamification;
    constructor(_type?: TypeOfGamification) {
      this.SetType(_type);
    }
    public GetInstance(): DesignPatterns.SingletonDesignPattern.ISingleton {
      let _instance: Gamification = null;
      if (this.instance === null) {
        _instance = new Gamification();
        this.instance.typeOfGamification = TypeOfGamification.NOT_DEFINED_YET; // define an generic type so that it doesnt stays undefined or null
      }
      return _instance;
    }
    public GetType(): TypeOfGamification {
      return this.typeOfGamification;
    }
    public SetType(_type: TypeOfGamification): void {
      this.typeOfGamification = _type;
    }
  }
  //#endregion

  //#region TutorialManager
  export class Subject {
    isActive: boolean;
    textToShow: string;
    focusPoint: any;
    constructor(_text: string, _focus: any) {
      this.SetText(_text);
      this.SetFocus(_focus);
    }
    SetText(_text: string): void {
      this.textToShow = _text;
    }
    SetFocus(_focus: any): void {
      this.focusPoint = _focus;
    }
    SetActive(_active: boolean): void {
      this.isActive = _active;
    }
    Activate(): JSON {
      if (this.isActive) {
        let subjectObject: JSON;
        let auxiliaryObject: any = {
          "Text": this.textToShow,
          "Focus": this.focusPoint
        }
        auxiliaryObject = <JSON>subjectObject;
        return auxiliaryObject;
      }
      else {
        throw console.error("isActivate  wasn`t true so cannot Activate");
      }
    }
    Deactivate(): void {
      this.isActive = false;
    }
  }
  //#endregion

  //#region CustomizationManager
  export class Addorn {
    addornObject: JSON;
    name: string;
    image: string;
    constructor(_name: string, _image: string) {
      this.name = _name;
      this.image = _image;
      this.CreateAddornObject();
    }
    CreateAddornObject(): void {
      let auxiliaryObject: any = {
        "Name": this.name,
        "Image": this.image
      }
      this.addornObject = <JSON>auxiliaryObject;
    }
  }
  export abstract class Swapper {
    type: TypeOfSwap;
    currentValue: string;
    Change(_value: string): void {
    }
    SetValue(_value: string): void {
      this.currentValue = _value;
    }
  }
  export class ColorSwapper extends Swapper {
    color: string[];
    Change(_value: string) {
      if (this.CheckValue) {
        this.currentValue = _value;
      }
      else {
        throw console.error("The value wasnt in the array.");

      }
    }
    CheckValue(_desiredValue: string): boolean {
      for (let index = 0; index < this.color.length; index++) {
        if (_desiredValue == this.color[index]) {
          return true;
        }
      }
      return false;
    }
  }
  //#endregion

  //#region LevelManager
  export class LevelManager extends Gamification implements DesignPatterns.ObservableDesignPattern.ISubject {
    levelController: LevelController;
    experienceReceiver: ExperienceReceiver;
    maxValueOfTheCurrentLevel: number;
    listOfObservers: DataStructure.List.List<DesignPatterns.ObservableDesignPattern.IObserver>;

    constructor(_exponential: number) {
      super(TypeOfGamification.LEVEL);
      this.levelController = new LevelController();
      this.experienceReceiver = new ExperienceReceiver(_exponential);
      this.maxValueOfTheCurrentLevel = 200;
    }
    CalculateNextValue(): void {
      this.maxValueOfTheCurrentLevel *= this.experienceReceiver.exponentialFactor;
    }
    OnUpgradeLevel(): void {
      this.levelController.UpgradeLevel();
    }
    OnExperienceReceived(_amountOfExperience: number): void {
      this.experienceReceiver.AddAmount(_amountOfExperience);
    }
    OnRecoverData(_dataRetrieved: DataRetrivedInLevel): void {
      this.levelController.SetCurrentLevel(_dataRetrieved.level);
      this.experienceReceiver.SetCurrentAmount(_dataRetrieved.experience);
    }

    RegisterObserver(_observer: DesignPatterns.ObservableDesignPattern.IObserver): void {
      let auxiliary = new DataStructure.ElementData.Element<DesignPatterns.ObservableDesignPattern.IObserver>();
      this.listOfObservers.AddElement(auxiliary);
    }
    UnregisterObserver(_observer: DesignPatterns.ObservableDesignPattern.IObserver): void {
      let auxiliary = new DataStructure.ElementData.Element<DesignPatterns.ObservableDesignPattern.IObserver>();
      this.listOfObservers.RemoveEspecificElement(auxiliary);
    }
    NotifyAllObservers(): void {
      throw new Error("Method not implemented.");
    }
    NotifyObserver(_observer: DesignPatterns.ObservableDesignPattern.IObserver): void {
      let auxiliary = this.listOfObservers.CreateArrayFromList();
      //TODO Notify users
    }

  }

  export class LevelController implements DesignPatterns.ObservableDesignPattern.IObserver {
    currentLevel: number = 0;
    constructor() {
      this.SetCurrentLevel(0);
    }
    public UpgradeLevel(): void {
      this.currentLevel++;
    }
    public SetCurrentLevel(_level: number): void {
      this.currentLevel = _level;
    }
    public Update(): void {

    }

  }

  export class ExperienceReceiver implements DesignPatterns.ObservableDesignPattern.IObserver {
    currentAmount: number;
    exponentialFactor: number;
    constructor(_exponential: number) {
      this.currentAmount = 0;
      this.exponentialFactor = _exponential;
    }
    public SetCurrentAmount(_value: number) {
      this.currentAmount = _value;
    }
    public AddAmount(_value: number): void {
      this.currentAmount = _value
    }
    public SubtractTheRest(current: number, maxAtThisLevel: number): number {
      if (current > maxAtThisLevel) {
        let rest = current - maxAtThisLevel;
        return rest;
      }
      return 0;
    }
    public SumRestByTimeout(_rest: number): void {
      setTimeout(function (_rest) {
        this.AddAmount(_rest);
      }, 3000);
    }
    public Update(): void {

    }

  }
  //#endregion

  //#region RankingManager
  export class RankingManager extends Gamification implements RankingConfigSortable {
    entriesData: DataStructure.List.List<RankingEntry>;
    displayedColumns = [];
    typeOfSort: TypeOfSort;
    public AddEntry(_entry: DataStructure.ElementData.Element<RankingEntry>) {
      this.entriesData.AddElement(_entry);
    }
    public RemoveEntry(_entry: DataStructure.ElementData.Element<RankingEntry>) {
      let auxiliary = this.entriesData.RemoveEspecificElement(_entry);
      if(auxiliary == null || auxiliary == undefined){
        alert("The entry "+ _entry + " was null or undefined.");
      }
    }
    //TODO
    public GetTypeOfRanking(){}
    public SetType(){}
    public GetEntries(){}
    
  }
  //#endregion


}



