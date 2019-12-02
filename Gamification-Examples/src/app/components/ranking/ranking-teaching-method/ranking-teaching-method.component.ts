
import { Component, OnInit,ViewChild, AfterViewInit  } from '@angular/core';
import {Ranking} from '../ranking';
import { MatSort, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-ranking-teaching-method',
  templateUrl: './ranking-teaching-method.component.html',
  styleUrls: ['./ranking-teaching-method.component.css']
})
export class RankingTeachingMethodComponent implements OnInit, AfterViewInit  {

  // private templateRanking : Ranking.RankingTemplateSortable;
  @ViewChild(MatSort) sort: MatSort;
  dataSource;

  constructor() { 
  }
  ngOnInit() {
    this.Init();
  }
  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }
  public Init():void{
    this.InitializeRanking();
    this.InitializeValues();
  }
  public InitializeRanking():void{
    //this.templateRanking = new Ranking.RankingTemplateSortable();
  }
  public InitializeValues():void{
    // this.templateRanking.displayedColumns = Ranking.COLUMNS_ENGAGENEMET;
    // this.templateRanking.entriesData = Ranking.ENGAGEMENT_DATA;
    // this.dataSource = new MatTableDataSource(this.templateRanking.entriesData);
  }
  // public GetDataSource(): Ranking.RankingEntry[] {
  //   return this.dataSource;
  // }
  public FilterValue(_valueBeingFiltered: string): void {
    this.dataSource.filter = _valueBeingFiltered.trim().toLocaleLowerCase();
  }
  // public GetColumns():string[]{
  //   return this.templateRanking.displayedColumns;
  // }
  
}