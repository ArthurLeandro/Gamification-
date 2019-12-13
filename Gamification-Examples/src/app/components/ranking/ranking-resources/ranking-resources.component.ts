
import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {Gamification} from '../../../classes/namespaces/gamification';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-ranking-resources',
  templateUrl: './ranking-resources.component.html',
  styleUrls: ['./ranking-resources.component.css']
})
export class RankingResourcesComponent extends Gamification.RankingViewer implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  entriesData;
  displayedColumns = [];

  constructor() {
    super();
  }
  ngOnInit() {
    this.displayedColumns = Gamification.COLUMNS_ENGAGEMENT;
    this.dataSource = Gamification.ENGAGEMENT_DATA;
    this.entriesData = new MatTableDataSource(this.dataSource);
  }
  ngAfterViewInit() {
    this.entriesData.sort = this.sort;
  }
  public GetColumns(): string[] {
    return this.displayedColumns;
  }
  public GetDataSource(): Gamification.RankingEntry[] {
    return this.entriesData;
  }
  public FilterValue(_valueBeingFiltered: string): void {
    this.entriesData.filter = _valueBeingFiltered.trim().toLocaleLowerCase();
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

