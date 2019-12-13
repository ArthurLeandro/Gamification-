
import { Component, OnInit,ViewChild, AfterViewInit  } from '@angular/core';
import {Gamification} from '../../../classes/namespaces/gamification';
import { MatSort, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-ranking-lecture-plan',
  templateUrl: './ranking-lecture-plan.component.html',
  styleUrls: ['./ranking-lecture-plan.component.css']
})
export class RankingLecturePlanComponent extends Gamification.RankingViewer implements OnInit, AfterViewInit {

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