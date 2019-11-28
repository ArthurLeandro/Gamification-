import { DesignPatterns } from './design-patterns';
import { DataStructure } from './data-structures';
import { Injectable } from '@angular/core';
import { summaryForJitName } from '@angular/compiler/src/aot/util';

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
  export enum TypeOfObjective {
    //all types of action that should be performed to count
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
  export class Reward {
    amountOfCoins: number;
    amountOfExperience: number;
    karma: number;
    type: TypeOfReward;
  }
  //#endregion

  //#region LevelManager
  export namespace Level {
    @Injectable({
      providedIn: 'root'
    })
    export class LevelManager extends Gamification {
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

      public OnUpgradeLevel(): void {
        this.levelController.UpgradeLevel();
        this.maxValueOfTheCurrentLevel *= this.experienceReceiver.exponentialFactor;
      }
      public OnExperienceReceived(_amountOfExperience: number): void {
        this.experienceReceiver.AddAmount(_amountOfExperience);
        if (this.ShouldLevelUp) {
          this.experienceReceiver.SumRestByTimeout(this.experienceReceiver.SubtractTheRest(this.experienceReceiver.currentAmount, this.maxValueOfTheCurrentLevel));
          this.OnUpgradeLevel();
        }
      }
      public OnRecoverData(_dataRetrieved: DataRetrivedInLevel): void {
        this.levelController.SetCurrentLevel(_dataRetrieved.level);
        this.experienceReceiver.SetCurrentAmount(_dataRetrieved.experience);
      }
      public ShouldLevelUp(): boolean {
        return (this.experienceReceiver.currentAmount > this.maxValueOfTheCurrentLevel);
      }

    }
    @Injectable({
      providedIn: 'root'
    })
    export class LevelController {
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
      public LoadLevel(): void {

      }
      public Update(): void {
        //update when needed to load level
      }

    }
    @Injectable({
      providedIn: 'root'
    })
    export class ExperienceReceiver {
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
    }
  }
  //#endregion

  //#region RankingManager
  export class RankingManager extends Gamification implements RankingConfigSortable {
    entriesData: DataStructure.List.List<RankingEntry>;
    displayedColumns = [];
    typeOfSort: TypeOfSort;
    public AddEntry(_entry: RankingEntry) {
      //send to Database
      //this.entriesData.AddElement(_entry);
    }
    public RemoveEntry(_entry: RankingEntry) {
      //remove from within the Database
      // let auxiliary = this.entriesData.RemoveEspecificElement(_entry);
      // if (auxiliary == null || auxiliary == undefined) {
      //   alert("The entry " + _entry + " was null or undefined.");
      // }
    }
    //TODO
    public GetTypeOfRanking() { }
    public SetType() { }
    public GetEntries() { }

  }
  //#endregion

  //#region MissionManager

  /** Classe que gerencia as missões do usuário
   * @private Todos os atributos desta classe são privados.
   * @var {List<Missions>} allMissions Lista contendo todas as missões.
   * @var {MissionFinder} missionFinder Classe utilizada para atribuir um elemento de pesquisa ao gerenciador
   */
  export class MissionManager extends Gamification {
    allMissions: DataStructure.List.List<Missions>;
    missionFinder: MissionFinder;
    constructor() {
      super();
    }
    /** Método responsável por receber e introduzir uma nova missão dentro da lista
    * @param {Missions} _mission Missão que será colocada dentro da lista de missões do gerenciador
    * @returns void
    */
    OnMissionsReceived(_mission: Missions): void {
      let auxiliary: DataStructure.ElementData.Element<Missions>;
      auxiliary.data.dataInsideThisElements = _mission;
      this.allMissions.AddElement(auxiliary);
    }
    /** Método responsável por concluir uma missão
    * @param {number} _id Identificador utilizado para achar uma missão dentro da lista
    * @returns void
    */
    OnMissionConcluded(_id: number): void {
      let auxiliary = this.missionFinder.FindMission(_id);
      auxiliary.OnConcluded();
    }
    /** Método responsável por atualizar o estado de uma missão
    * @param {number} _id Identificador utilizado para achar uma missão dentro da lista.
    * @returns void
    */
    OnMissionUpdate(_id: number): void {
      let auxiliary = this.missionFinder.FindMission(_id);
      auxiliary.CheckObjective();
    }
  }
  /** Classe responsável por atribuir ao Mission Manager uma maneira de pesquisar suas missões
  */
  export class MissionFinder {
    /** Método responsável por encontrar uma missão baseada em seu id
    * @param {number} id Valor que será usado para efetuar a busca da missão em uma lista
    * @returns {Missions} Missão encontrada ou nulo caso não tenha sido encontrada
    */
    FindMission(id: number): Missions {
      return this.ReturnMission(null);
    }
    /** Método responsável por retornar uma missão encontrada pelo FindMission
     * @var {Missions} _mission Missão encontrada pelo Método FindMission
     * @return {Missions} Missão encontrada pelo Método FindMission
     */
    ReturnMission(_mission: Missions): Missions {
      return _mission;
    }
  }
  /**Classe que representa uma missão
   * É a classe genérica de onde todas as outras missões derivam e se especializam
   * @private Todos os atributos dessa classe são privados
   * @var {string} name Nome da missão
   * @var {number} id Identificador da missão
   * @var {number} amountToComplete Valor mínimo para ser alcançado
   * @var {string} description Descrição da missão
   * @var {StateOfMissions} state Possíveis estados que a missão pode adquirir
   * @var {TypeOfObjective} typeOfObjective Tipos possíveis que um objetivo pode adquirir
   * @var {Reward} reward Recompensa recebida por concluir uma missão
  */
  export class Missions {
    name: string;
    id: number;
    amountToComplete: number;
    description: string;
    state: StateOfMissions;
    typeOfObjective: TypeOfObjective;
    reward: Reward;
    constructor(_name: string, _id: number, _amountToComplete: number, _description: string, _state: StateOfMissions, _typeOfObjective: TypeOfObjective, _reward: Reward) {
      this.SetName(_name);
      this.SetID(_id);
      this.SetAmountToComplete(_amountToComplete);
      this.SetDescription(_description);
      this.SetState(_state);
      this.SetTypeOfObjectives(_typeOfObjective);
      this.SetReward(_reward);
    }
    //#region Getters & Setters
    /** Método responsável por pegar o atributo name
     */
    public GetName(): string {
      return this.name;
    }
    /** Método responsável por pegar o atributo id
     */
    public GetID(): number {
      return this.id;
    }
    /** Método responsável por pegar o atributo amountToComplete
     */
    public GetAmountToComplete(): number {
      return this.amountToComplete;
    }
    /** Método responsável por pegar o atributo description
     */
    public GetDescription(): string {
      return this.description;
    }
    /** Método responsável por pegar o atributo state
     */
    public GetState(): StateOfMissions {
      return this.state;
    }
    /** Método responsável por pegar o atributo type
     */
    public GetTypeOfObjective(): TypeOfObjective {
      return this.typeOfObjective;
    }
    /** Método responsável por pegar o atributo reward
     */
    public GetReward(): Reward {
      return this.reward;
    }
    /** Método responsável por setar o valor do nome
     * @param {string} _nome Valor cujo o nome será setado 
     */
    public SetName(_name: string): void {
      this.name = _name;
    }
    /** Método responsável por setar o valor da descrição
     * @param {string} _description Valor cujo a descrição será setado  
     */
    public SetDescription(_description: string): void {
      this.description = _description;
    }
    /** Método responsável por setar o valor do identificador
     * @param {number} _id Valor cujo o id será setado 
     */
    public SetID(_id: number): void {
      this.id = _id;
    }
    /** Método responsável por setar um valor do objetivo dessa missão
     * @param {number} _amountToComplete Valor para qual será setado o
     */
    public SetAmountToComplete(_amountToComplete: number): void {
      this.amountToComplete = _amountToComplete;
    }
    /** Método responsável por setar um estado a esta missão
     * @param {StateOfMissions} _state Estado para qual essa missão será setada
     */
    public SetState(_state: StateOfMissions): void {
      this.state = _state;
    }
    /** Método responsável por setar o tipo de objetivo dessa missão
     * @param {TypeOfObjective} _typeOfObjectives 
     */
    public SetTypeOfObjectives(_typeOfObjectives: TypeOfObjective): void {
      this.typeOfObjective = _typeOfObjectives;
    }
    /** Método responsável por setar a recompensa da missão
     * @param {Reward} _reward Recompensa que deverá ser setada
     */
    public SetReward(_reward: Reward): void {
      this.reward = _reward;
    }
    //#endregion

    /** Método responsável por marcar essa missão como concluída e entregar todos as recompensas para o usuário
    */
    public OnConcluded(): void {
      this.SetState(StateOfMissions.FINISHED);
      this.GiveReward();
    }
    /** Método responsável por  tornar uma missão como disponível
    */
    public MakeAvaliable(): void {
      this.SetState(StateOfMissions.AVALIABLE);
    }
    /** Método responsável por analisar o objetivo da missão
    */
    public CheckObjective(): void {
      /*Analisar se o numero do objetivo declarado do jogador eh superior ao valor 
      que esta descrito nessa missao 
      se sim marcar essa missao como concluida
      */
    }
    /** Método responsável por entregar a recompensa dentro dessa missão ao usuário
    */
    public GiveReward(): void {
      //adicionar a recompensa ao usuário
      /*ACESSAR O BANCO DE DADOS
      PEGAR O USUARIO QUE TEREMOS QUE ENTREGAR AS RECOMPENSAS
      PARSAR AS RECOMPENSAS
      ENVIAR/ADICIONAR AS RECOMPENSAS AO USUÁRIO
      */
    }
  }

  /**Classe que representa uma missão sazonal 
  * Missões sazonais são missões que ficam disponíveis por um tempo depois são desabilitadas
  *  @private Todos os atributos desse método são privados
  * @var {Date} avaliability Período em que a missão ficará disponível
  */
  export class Sazonal extends Missions {
    avaliability: Date;
    constructor(_name: string, _id: number, _amountToComplete: number, _description: string, _state: StateOfMissions, _typeOfObjective: TypeOfObjective, _reward: Reward) {
      super(_name, _id, _amountToComplete, _description, _state, _typeOfObjective, _reward);
    }
    //#region Getters & Setters
    /** Método responsável por pegar o valor do atributo avaliability
     */
    GetAvaliability(): Date {
      return this.avaliability;
    }
    /** Método responsável por setar o valor do atributo avaliability
    * @param {Date} avaliability Valor cujo será setado o atributo avaliability
    * @returns void
    */
    SetAvaliability(_date: Date) {
      this.avaliability = _date;
    }
    //#endregion
  }

  /** Classe que representa uma missão em cooperativo
   * Essas missões precisam do auxílio de outro usuário para serem concluídas
  * @extends Missions Missions é a classe base de todas as missões
  * @private Todos os atributos desse método são privados
  * @var {string} friendsName Nome dos usuários cujo serão enviados o pedido
  * @var {Request} request Pedido enviado aos usuários
  */
  export class Coop extends Missions {
    friendsName: string;
    request: Request;
    constructor(_name: string, _id: number, _amountToComplete: number, _description: string, _state: StateOfMissions, _typeOfObjective: TypeOfObjective, _reward: Reward) {
      super(_name, _id, _amountToComplete, _description, _state, _typeOfObjective, _reward);
    }
    //#region Getters & Setters
    /**Método responsável por pegar o friendsName dentro dessa missão
     * 
     */
    GetFriendName(): string {
      return this.friendsName;
    }
    /** Método que é responsável por pegar o Request dentro dessa missão
     */
    GetReward(): Reward {
      return this.reward;
    }
    /** Método responsável por setar o nome de um amigo que deve auxiliar nesta missão
    * @param {string} _friendName Valor cujo o friendsName será setado
    * @returns void
    */
    SetFriendName(_friendName: string) {
      this.friendsName = _friendName;
    }
    /** Método responsável por setar um request dentro dessa classe
    * @var {Request} _request Valor cujo o request dessa classe será setado  
    * @returns void
    */
    SetRequest(_request: Request) {
      this.request = _request;
    }
    //#endregion
  }

  /**'Classe responsável por gerar um pedido para outro usuário 
  * pedindo ajuda em uma missão cooperativa'
  * @private Todos os atributos desse métodos são privados.
  * @var {string} nameOfSender Nome do usuário que gerou o pedido
  * @var {string} content Conteúdo do usuário que gerou o pedido
  */
  export class Request {
    nameOfSender: string;
    content: string;
    constructor(_name: string, _content: string) {
      this.nameOfSender = _name;
      this.content = _content;
    }
    //#region Getters & Setters
    /** Método responsável por pegar o valor do nome dessa classe
     * @returns void
     */
    GetName(): string {
      return this.nameOfSender;
    }
    /** Método responsável por pegar o valor de conteúdo
     * @returns void
     */
    GetContent(): string {
      return this.content;
    }
    /** Classe responsável por setar o nome
    * @var {string} _name nome que será setado dentro da classe
    * @returns void 
    */
    SetName(_name: string) {
      this.nameOfSender = _name;
    }
    /** Classe responsável por setar o nome
    * @var {string} _content conteúdo que será setado dentro da classe
    * @returns void
    */
    SetContent(_content: string) {
      this.content = _content;
    }
    //#endregion
  }
  //#endregion

  //#region PointsManager
  export class PointsManager {
    rewardToSet: Reward;
    awardToSet: Award;
    imageToShow: string;
    public OnPopUp(): void {

    }
    public OnClosePopUp(): void {

    }
    public SetReward(reward: Reward): void {

    }
    public SetAward(award: Award): void {

    }
    public ShowUser(): void {

    }
    public AddToUser(type): void {

    }
  }
  export class Points {
    amountOfPoints: number;
    public ClampValue(_minValue: number, _maxValue: number, _value: number): number {
      if (_value < _minValue) {
        return _minValue;
      }
      else if (_value > _maxValue) {
        return _maxValue;
      }
      else {
        return _value;
      }
    }
  }
  export class CoinPoints extends Points {
    constructor(_amount: number) {
      super();
      this.amountOfPoints = _amount;
    }

    public OnBuyingItem(_item: Item) {

    }
  }
  export class KarmaPoints extends Points {
    constructor(_amount: number) {
      super();
      this.amountOfPoints = _amount;
      this.amountOfPoints = this.ClampValue(0.1, 2.0, _amount)
    }
  }
  export class ReputationPoints extends Points {
    constructor(_amount: number) {
      super();
      this.amountOfPoints = _amount;
      this.amountOfPoints = this.ClampValue(1, 5, _amount)
    }
  }

  export class Item {

  }
  export class Award {
    name: string;
    description: string;
    type: TypeOfReward;

    public OnReceiveAward() {

    }
  }

  //#endregion

  //#region CustomizationManager
  export class CustomziationManager {
    currentAdorn: Adorn;
    state: boolean;
    colorSwapper: ColorManager;
    svgSwapper: SVGManager;
    modeSwapper: ModeManager;
    titleSwapper: TitleManager;
    constructor() { }
    public ChangeMode(): void { }
    public ChangeColor(_value: string) { }
    public ReceiveAdorn(): void { }
    public ChangeAdorn(_adorn: Adorn): void { }
  }
  export class Adorn {
    adornObject: JSON;
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
      this.adornObject = <JSON>auxiliaryObject;
    }
  }
  export class Icons {

  }
  export class Swapper {
    type: TypeOfSwap;
    currentValue: string;
    public Change(_value: string): void {
    }
    public SetValue(_value: string): void {
      this.currentValue = _value;
    }
  }
  export class ColorManager extends Swapper {
    color: string[];
    public Change(_value: string) {
      if (this.CheckValue) {
        this.currentValue = _value;
      }
      else {
        throw console.error("The value wasnt in the array.");

      }
    }
    public CheckValue(_desiredValue: string): boolean {
      for (let index = 0; index < this.color.length; index++) {
        if (_desiredValue == this.color[index]) {
          return true;
        }
      }
      return false;
    }
  }
  export class SVGManager extends Swapper {
    svgs: DataStructure.List.List<Icons>;
    constructor() {
      super();
    }
    public AddValue(_icon: Icons) { }
    public SortList(): void { }
    public SortName(): void { }

  }
  export class ModeManager extends Swapper {
    dark: boolean;
    constructor() {
      super();
    }
    public SetMode(_dark: boolean): void { }
  }
  export class TitleManager extends Swapper {
    titles: DataStructure.List.List<string>;
    constructor() {
      super();
    }
  }
  //#endregion

  //#region TutorialManager
  export class TutorialManager {
    status: boolean;
    focusPoints: Subject[];
    activeFocusPoint: Subject;
    public HabilitateTutorial(): void { }
    public Skip(): void { }
    public Next(index): void { }
  }
  export class Subject {
    isActive: boolean;
    textToShow: string;
    focusPoint: any;
    constructor(_text: string, _focus: any) {
      this.SetText(_text);
      this.SetFocus(_focus);
    }
    public SetText(_text: string): void {
      this.textToShow = _text;
    }
    public SetFocus(_focus: any): void {
      this.focusPoint = _focus;
    }
    public SetActive(_active: boolean): void {
      this.isActive = _active;
    }
    public Activate(): JSON {
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
    public Deactivate(): void {
      this.isActive = false;
    }
  }
  //#endregion
}