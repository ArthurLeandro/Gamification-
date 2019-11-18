
import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {Ranking} from '../ranking';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-ranking-resources',
  templateUrl: './ranking-resources.component.html',
  styleUrls: ['./ranking-resources.component.css']
})
export class RankingResourcesComponent implements OnInit, AfterViewInit {

  private templateRanking : Ranking.RankingTemplateSortable;
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
    this.templateRanking = new Ranking.RankingTemplateSortable();
  }
  public InitializeValues():void{
    this.templateRanking.displayedColumns = Ranking.COLUMNS_ENGAGENEMET;
    this.templateRanking.entriesData = Ranking.ENGAGEMENT_DATA;
    this.dataSource = new MatTableDataSource(this.templateRanking.entriesData);
  }
  public GetDataSource(): Ranking.RankingEntry[] {
    return this.dataSource;
  }
  public FilterValue(_valueBeingFiltered: string): void {
    this.dataSource.filter = _valueBeingFiltered.trim().toLocaleLowerCase();
  }
  public GetColumns():string[]{
    return this.templateRanking.displayedColumns;
  }
  
}

/*

public CalculateStarsAverage():void{
    for (let i = 0; i < this.templateRanking.entriesData.length; i++) {
      let wholeRow = this.templateRanking.entriesData[i] as Ranking.EngagementRankingEntry;
      //console.log(wholeRow);
      let averageOfStars = 0;
      let fieldValues =  wholeRow.numberOfStars;
      let keys = Object.keys(fieldValues);
      let values = keys.map(k => fieldValues[k]);
      for(let i=0;i<this.templateRanking.entriesData.length;i++){
        +=values[i];
      }
      wholeRow.averageStars/=5;
      console.log(wholeRow.averageStars);
      wholeRow.averageStars = (averageOfStars/5);
      this.templateRanking.entriesData[i] = wholeRow;
    }
  }
  */
