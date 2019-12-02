import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Ranking } from '../ranking';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-ranking-professors',
  templateUrl: './ranking-professors.component.html',
  styleUrls: ['./ranking-professors.component.css']
})
export class RankingProfessorsComponent implements OnInit, AfterViewInit {

  // private templateRanking: Ranking.RankingTemplateSortable;
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  constructor() {
  }
  ngOnInit() {
    //this.Init();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  // }
  // public Init(): void {
  //   this.InitializeRanking();
  //   this.InitializeValues();
  // }
  // public InitializeRanking(): void {
  //   this.templateRanking = new Ranking.RankingTemplateSortable();
  // }
  // public InitializeValues(): void {
  //   this.templateRanking.displayedColumns = Ranking.COLUMNS_MERIT;
  //   this.templateRanking.entriesData = Ranking.MERIT_DATA;
  //   this.dataSource = new MatTableDataSource(this.templateRanking.entriesData);
  // }
  // public GetColumns(): string[] {
  //   return this.templateRanking.displayedColumns;
  // }
  // public GetDataSource():Ranking.RankingEntry[] {
  //   return this.dataSource;
  // }
  // public FilterValue(_valueBeingFiltered: string): void {
  //   this.dataSource.filter = _valueBeingFiltered.trim().toLocaleLowerCase();
  }


}
