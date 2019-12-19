import { DesignPatterns } from './design-patterns';
import { DataStructure } from './data-structures';
import { MatSort } from '@angular/material';
import {Subject} from 'rxjs';

export namespace Gamification {

  //#region All Enums
  /**Enumerado de todas as opções possivéis de Gamificação.
  *
  *  Essas opções são utilizadas como forma de controle e distinção das Gamificações.
  */
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
  /**Enumerado do tipo de dados que o desenvolvedor terá que controlar.
  *
  * Esses dados terão utilidade na hora que forem enviados para dentro do servidor.
  */
  export enum TypeOfData {
    RANKING_ENTRY,
    USER
  }
  /**Enumerado de todos os tipos de recompensas que o usuário pode receber.
  *
  * Esses tipos são usados para auxiliar na forma de efetuar o parse dos dados.
  */
  export enum TypeOfReward {
    REWARD,
    AWARD
  }
  /**Enumerado de todos os tipos possivéis que uma missão poderá ter.
  *
  * São utilizadas em uma máquina de estados das missões.
  */
  export enum StateOfMissions {
    FINISHED,
    STARTED,
    AVALIABLE,
    DISABLE
  }
  /**Enumerado de todos os tipos de customizações possivéis.
  
  *São utilizados para controlar e organizar os dados.
  */
  export enum TypeOfSwap {
    COLOR,
    MODE,
    SVG,
    TITLE
  }
  /**Enumerado de todos os tipos de entrada dentro do Ranking. 
  *É utilizado para controlar o Ranking e o que deve ser mostrado ao usuário.
  */
  export enum TypeOfSort {
    MERIT,
    ENGAGEMENT
  }
  /**Enumerado de todas as ações que o jogador poderá fazer dentro da plataforma para concluir uma missão.
  
  Esse enumerado é utilizado para ativar os eventos que auxiliam ele a completar missões.
  
  (Esse enumerador fica a cabo do desenvolvedor implementar na sua própria plataforma.)
  */
  export enum TypeOfObjective {
    //all types of action that should be performed to count
    NORMAL
  }
  /**Enumerado de todas as possivéis cores que podem ser utilizadas dentro de customizações.
  *
  * Essas cores são do Angular themes e caso o desenvolvedor crie seu próprio tema ele deverá criar enumerador válido.
  */
  export enum ValidColors {
    //cores validas
  }
  //#endregion

  //#region All Interfaces
  export interface CRUD {
    OnCreate(_object: Object);
    OnRead(_object: Object);
    OnUpdate(_object: Object);
    OnDelete(_object: Object);
  }
  export interface GenericGamifiedComponents {
    OnRecoverData(): void;
    OnSetData(): void;
    OnSendData(): void;
  }
  export interface Services {
    RecoverData(): void;
    SetData(): void;
    OnSendData(): void;
  }
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
    entries: RankingEntry[];
    displayedColumns;
  }
  export interface RankingEntry {
  }
  export interface MeritRankingEntry extends RankingEntry, Merit {
  }
  export interface EngagementRankingEntry extends RankingEntry, BasicEngagement {
  }
  export interface Colors{
    value:string;
    viewValue:string;

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
    displayedColumns: string[] = ['methods', 'description', 'params', 'returns'];
    elementData: DocumentationInformation[];
    constructor(_type?: TypeOfGamification) {
      this.SetType(_type);
      this.GetInstance();
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
    public GetElementData(): DocumentationInformation[] {
      return this.elementData;
    }
    public GetColumns(): string[] {
      return this.displayedColumns;
    }
    public SetType(_type: TypeOfGamification): void {
      this.typeOfGamification = _type;
    }
  }
  export interface DocumentationInformation {
    methods: string;
    description: string;
    params: string;
    returns: string;
  }
  export class Reward {
    amountOfCoins: number;
    amountOfExperience: number;
    karma: number;
    type: TypeOfReward;
    constructor(_amountOfCoins:number,_amountOfExperience:number,_karma:number,_type:TypeOfReward){
      this.amountOfCoins = _amountOfCoins;
      this.amountOfExperience = _amountOfExperience;
      this.karma = _karma;
      this.type = _type;
    }
  }
  //#endregion

  //#region LevelManager
  export namespace Level {
    export class LevelManager extends Gamification {
      currentLevel: number = 0;
      experienceReceiver: ExperienceReceiver;
      maxValueOfTheCurrentLevel: number;
      listOfObservers: DataStructure.List.List<DesignPatterns.ObservableDesignPattern.IObserver>;
      elementData = [
        { methods: "OnUpgradeLevel", description: "Procedimento usado para aumentar o nível do usuário", params: "Não aceita nenhum parâmetro.", returns: "void" },
        { methods: "OnExperienceReceived", description: "Procedimento usado para receber algum valor de experiência.", params: "Valor da experiência.", returns: "void" },
        { methods: "ShouldLevelUp", description: "Procedimento usado para analisar se o usuário deve ter seu nível aumentado.", params: "Não aceita nenhum parâmetro.", returns: "boolean" },
      ];
      constructor(_exponential: number) {
        super(TypeOfGamification.LEVEL);
        this.experienceReceiver = new ExperienceReceiver(_exponential);
        this.maxValueOfTheCurrentLevel = 200;
      }

      public OnUpgradeLevel(): void {
        this.currentLevel++;
        this.maxValueOfTheCurrentLevel *= this.experienceReceiver.exponentialFactor;
        this.experienceReceiver.currentAmount = 0;
      }
      public OnExperienceReceived(_amountOfExperience: number): void {
        this.experienceReceiver.AddAmount(_amountOfExperience);
        if (this.ShouldLevelUp()) {
          this.experienceReceiver.SumRestByTimeout(
            this.experienceReceiver.SubtractTheRest(this.experienceReceiver.currentAmount, this.maxValueOfTheCurrentLevel
            ));
          this.OnUpgradeLevel();
        }
      }
      public ShouldLevelUp(): boolean {
        if (this.experienceReceiver.currentAmount >= this.maxValueOfTheCurrentLevel) return true;
        else return false;
      }
      public UPPLevel(): void {
        this.SetCurrentLevel(this.currentLevel++);
      }
      public GetCurrentLevel(): number {
        return this.currentLevel;
      }
      public SetCurrentLevel(_level: number): void {
        this.currentLevel = _level;
      }
    }

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
        this.currentAmount += _value;
      }
      public SubtractTheRest(current: number, maxAtThisLevel: number): number {
        if (current > maxAtThisLevel) {
          let rest = current - maxAtThisLevel;
          setTimeout(function () {
            this.currentamount += rest;
          }, 1500);
          return rest;
        }
        return 0;
      }
      public SumRestByTimeout(_rest: number): void {
        let value = _rest;
        setTimeout(function () {
          this.currentAmount += value;
        }, 1500);
      }
    }
  }
  //#endregion

  //#region RankingManager
  export const COLUMNS_MERIT = ['author', 'school', 'discipline', 'followers', 'posts', 'likes'];
  export const COLUMNS_ENGAGEMENT = ['author', 'name', 'numberOfDownloads', 'numberOfFavorites', 'school', 'discipline'];
  export const MERIT_DATA: MeritRankingEntry[] = [
    { author: 'Lúcio Silveira', discipline: 'Redação', followers: 56712, posts: 23451, school: 'Governador Milton Campos', likes: 144 },
    { author: 'João Marcos', discipline: 'Educação Física', followers: 1992, posts: 213, school: 'Laureano Pimentel', likes: 1 },
    { author: 'Luciano Marques', discipline: 'Geografia', followers: 134562, posts: 2361, school: 'Professora Isaura Santos', likes: 124 },
    { author: 'Roberto Damasceno', discipline: 'História', followers: 13452, posts: 521, school: 'Ana Alves Teixeira', likes: 14 },
    { author: 'Luciana Guimarães', discipline: 'Matemátca', followers: 1892, posts: 261, school: 'Antônio Mourão', likes: 44 },
  ];
  export const ENGAGEMENT_DATA: EngagementRankingEntry[] = [
    { numberOfDownloads: 3453, numberOfFavorites: 243, author: "Carlos Martins", school: 'Governador Milton Campos', discipline: "História", name: "História Interativa" },
    { numberOfDownloads: 303, numberOfFavorites: 1, author: "Alváro Dami~so", school: "Colégio Tiradentes", discipline: "Portugês", name: "Acentos na História" },
    { numberOfDownloads: 13, numberOfFavorites: 23, author: "Ana Cláudia", school: "Maestro Villa Lobos", discipline: "Redação", name: "Redação 1000%" },
    { numberOfDownloads: 1345, numberOfFavorites: 265, author: "Marcela Alvares", school: "Ordem e Progresso", discipline: "Matemátca", name: "Matemática para Enem" }
  ];
  export class RankingManager extends Gamification implements RankingConfigSortable {
    entries: RankingEntry[];
    typeOfSort: TypeOfSort;
    elementData = [
      { methods: "OnUpgradeLevel", description: "Procedimento usado para aumentar o nível do usuário", params: "Não aceita nenhum parâmetro.", returns: "void" },
      { methods: "OnExperienceReceived", description: "Procedimento usado para receber algum valor de experiência.", params: "Valor da experiência.", returns: "void" },
      { methods: "ShouldLevelUp", description: "Procedimento usado para analisar se o usuário deve ter seu nível aumentado.", params: "Não aceita nenhum parâmetro.", returns: "boolean" }
    ];
    constructor() {
      super(TypeOfGamification.RANKING);
    }
    public AddEntry(_entry: Gamification.RankingEntry) {
      this.entries.push(_entry);
    }
    public RemoveEntry(_entry: Gamification.RankingEntry) {
      return this.entries.filter(function (_element) {
      });
    }
    public GetTypeOfRanking(): TypeOfSort {
      return this.typeOfSort;
    }
    public SetTypeOfRanking(_type: TypeOfSort): void {
      this.typeOfSort = _type;
    }
  }
  export class RankingViewer {
    entriesData: Gamification.RankingEntry[];
    displayedColumns;
    dataSource;
    sort;
    public GetColumns(): string[] {
      return this.displayedColumns;
    }
    public GetDataSource(): RankingEntry[] {
      return this.dataSource;
    }
    public FilterValue(_valueBeingFiltered: string): void {
      this.dataSource.filter = _valueBeingFiltered.trim().toLocaleLowerCase();
    }

  }
  //#endregion

  //#region MissionManager

  /** Classe que gerencia as missões do usuário
   * @private Todos os atributos desta classe são privados.
   * @var {List<Missions>} allMissions Lista contendo todas as missões.
   * @var {MissionFinder} missionFinder Classe utilizada para atribuir um elemento de pesquisa ao gerenciador
   */
  export class MissionManager extends Gamification {
    allMissions:Array<Missions> = new Array<Missions>();
    constructor() {
      super();
    }
    /** Método responsável por receber e introduzir uma nova missão dentro da lista
    * @param {Missions} _mission Missão que será colocada dentro da lista de missões do gerenciador
    * @returns void
    */
    OnMissionsReceived(_mission: Missions): void {
      this.allMissions.push(_mission);
    }
    /** Método responsável por concluir uma missão
    * @param {number} _id Identificador utilizado para achar uma missão dentro da lista
    * @returns void
    */
    OnMissionConcluded(_id: number): void {
      // let auxiliary = this.missionFinder.FindMission(_id);
      // auxiliary.OnConcluded();
    }
    /** Método responsável por atualizar o estado de uma missão
    * @param {number} _id Identificador utilizado para achar uma missão dentro da lista.
    * @returns void
    */
    OnMissionUpdate(_id: number): void {
      let auxiliary = this.allMissions[this.allMissions.indexOf(this.allMissions[_id])];
      auxiliary.CheckObjective();
    }
    //find index
    //return mission of that specific index
    public GetMission(identifier:any):Missions{
      let mission = this.allMissions.find(mission =>
        mission.name == identifier || mission.id == identifier
      );
      if (mission!=null || mission != undefined){
        return mission;
      } 
      throw console.error("The mission wasn´t found");
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
    currentAmount:number;
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
      this.currentAmount = 0;
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
  /**'Classe que serve de gerente de todas a gamificação de pontuação'
  *@private Todos os atributos desta casse são privados.
  * @var {Reward} rewardToSet Um espaço dentro da memória que representa a recompensa que deve ser parseada e entregue ao usuário.
  * @var {Award} awardToSet Um espaço dentro da memória que representa a conquista (achievement) que deve ser parseada e entregue ao usuário.
  * @var {string} imageToShow O caminho para uma imagem que deve ser usada em uma demonstração.
  */
  export class PointsManager extends Gamification {
    rewardToSet: Reward;
    awardToSet: Award;
    imageToShow: string;
    elementData = [
      { methods: "OnUpgradeLevel", description: "Procedimento usado para aumentar o nível do usuário", params: "Não aceita nenhum parâmetro.", returns: "void" },
      { methods: "OnExperienceReceived", description: "Procedimento usado para receber algum valor de experiência.", params: "Valor da experiência.", returns: "void" },
      { methods: "ShouldLevelUp", description: "Procedimento usado para analisar se o usuário deve ter seu nível aumentado.", params: "Não aceita nenhum parâmetro.", returns: "boolean" },
    ];
    constructor() {
      super(TypeOfGamification.POINTS);

    }
    //#region Getters & Setters
    /**'Retorna o objeto Recompensa'
    */
    public GetReward(): Reward {
      return this.rewardToSet;
    }
    /**'Retorna o objeto Conquista'
    */
    public GetAward(): Award {
      return this.awardToSet;
    }
    /**'Retorna a string Imagem'
    */
    public GetImage(): string {
      return this.imageToShow;
    }
    /** 'Seta a Recompensa'
    * @param _reward Recompensa a ser dada
    * @returns void
    */
    public SetReward(_reward: Reward): void {
      this.rewardToSet = _reward;
    }
    /** 'Seta a Recompensa'
    * @param _award Conquista a ser dada
    * @returns void
    */
    public SetAward(_award: Award): void {
      this.awardToSet = _award;
    }
    /** 'Set a Image'
    * @param _image Image a ser dada
    * @returns void
    */
    public SetImage(_image: string): void {
      this.imageToShow = _image;
    }
    //#endregion

    public OnPopUp(): void {

    }
    public OnClosePopUp(): void {

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
    public IncreasePoints(_amount: number) {
      this.amountOfPoints += _amount;
    }
  }

  export class CoinPoints extends Points {
    constructor(_amount: number) {
      super();
      this.amountOfPoints = _amount;
    }
  }
  export class KarmaPoints extends Points {
    constructor(_amount: number) {
      super();
      this.amountOfPoints = _amount;
      this.amountOfPoints += 1;
    }
    public IncreasePoints(_amount: number) {
      this.amountOfPoints += this.ClampValue(0.1, 2.0, _amount);
    }
  }
  export class ReputationPoints extends Points {
    constructor(_amount: number) {
      super();
      this.amountOfPoints = _amount;
      this.amountOfPoints = 0;
    }
    public IncreasePoints(_amount: number) {
      this.amountOfPoints += this.ClampValue(1, 5, _amount)
    }
  }
  export class Award {
    name: string;
    description: string;
    type: TypeOfReward;
    constructor(_name: string, _description: string, _type: TypeOfReward) {
      this.SetDescription(_description);
      this.SetName(_name);
      this.SetType(_type);
    }
    public SetName(_name: string) {
      this.name = _name;
    }
    public SetDescription(_description: string) {
      this.description = _description;
    }
    public SetType(_type: TypeOfReward) {
      this.type = _type;
    }

    public OnReceiveAward() {

    }
  }

  //#endregion

  //#region CustomizationManager
  export class CustomizationManager extends Gamification {
    currentAdorn: Adorn;
    allAdorns: Adorn[];
    state: boolean;
    colorSwapper: ColorManager;
    svgSwapper: SVGManager;
    modeSwapper: ModeManager;
    titleSwapper: TitleManager;
    elementData = [
      { methods: "OnUpgradeLevel", description: "Procedimento usado para aumentar o nível do usuário", params: "Não aceita nenhum parâmetro.", returns: "void" },
      { methods: "OnExperienceReceived", description: "Procedimento usado para receber algum valor de experiência.", params: "Valor da experiência.", returns: "void" },
      { methods: "ShouldLevelUp", description: "Procedimento usado para analisar se o usuário deve ter seu nível aumentado.", params: "Não aceita nenhum parâmetro.", returns: "boolean" }
    ];
    constructor() {
      super(TypeOfGamification.CUSTOMIZATION);
      this.state = true;
      this.colorSwapper = new ColorManager();
      this.svgSwapper = new SVGManager();
      this.modeSwapper = new ModeManager();
      this.titleSwapper = new TitleManager();
    }
    public OnChangeMode(): void {
      this.modeSwapper.SetMode(this.state);
    }
    public OnChangeColor(_value: ValidColors) {
      this.colorSwapper.SetValue(_value.toString());
    }
    public OnReceiveAdorn(_adorn: Adorn): void {
      this.allAdorns.push(_adorn);
    }
    public OnChangeAdorn(_adorn: Adorn): void {
      this.currentAdorn = _adorn;
    }
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
    public CreateAddornObject(): void {
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
    color: Colors[];
    public Change(_value: string) {
      if (this.CheckValue(_value)) {
        this.currentValue = _value;
      }
      else {
        throw console.error("The value wasnt in the array.");

      }
    }
    public CheckValue(_desiredValue: string): boolean {
      for (let index = 0; index < this.color.length; index++) {
        if (_desiredValue == this.color[index].value) {
          return true;
        }
      }
      return false;
    }
  }
  export class SVGManager extends Swapper {
    svgs: string[];
    constructor() {
      super();
    }
    public AddValue(_icon: string) {
      this.svgs.push(_icon);
    }
    public SortList(): void {
      this.svgs.sort(function (a, b) {
        var nameA = a.toLowerCase(), nameB = b.toLowerCase();
        if (nameA < nameB) //sort string ascending
          return -1;
        if (nameA > nameB)
          return 1;
        return 0; //default return value (no sorting)
      });
    }
  }

  export class ModeManager extends Swapper {
    private dark = new Subject<boolean> ();
    isDark = this.dark.asObservable();    
    constructor() {
      super();
    }
    public SetMode(_dark: boolean): void { 
      this.dark.next(_dark);
    }
  }
  export class TitleManager extends Swapper {
    titles: Colors[]=[
      {value:"novato",viewValue:"Novato"},
      {value:"experiente",viewValue:"Experiente"},
      {value:"avançado",viewValue:"Avançado"},
    ];
    constructor() {
      super();
    }
  }
  //#endregion

  //#region TutorialManager
  export class TutorialManager extends Gamification {
    status: boolean;
    focusPoints: ElementSubject[];
    activeFocusPoint: ElementSubject;
    constructor() {
      super(TypeOfGamification.TUTORIAL);
      this.status = true;
    }
    public HabilitateTutorial(): void {
      this.status = !this.status;
    }
    public SetFocus(_subject: ElementSubject) {
      this.focusPoints.push(_subject);
    }
    public SetActiveFocus() {
      if (this.activeFocusPoint == this.focusPoints[this.focusPoints.length - 1]) {
        this.Skip();
      }
      this.activeFocusPoint = this.focusPoints[this.focusPoints.indexOf(this.activeFocusPoint) + 1];
    }
    public Skip(): void {
      this.activeFocusPoint = null;
    }
    public Next(): void {
      this.activeFocusPoint = this.focusPoints[this.focusPoints.indexOf(this.activeFocusPoint) + 1];
      if (this.activeFocusPoint == this.focusPoints[this.focusPoints.length - 1]) {
        this.status = false;
      }
    }
  }
  export class ElementSubject {
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