import { Gamification } from 'src/app/classes/namespaces/gamification';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-ranking-professors',
  templateUrl: './ranking-professors.component.html',
  styleUrls: ['./ranking-professors.component.css']
})
export class RankingProfessorsComponent extends Gamification.RankingViewer implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  entriesData;
  displayedColumns = [];

  constructor() {
    super();
  }
  ngOnInit() {
    this.displayedColumns = Gamification.COLUMNS_MERIT;
    this.dataSource = Gamification.MERIT_DATA;
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
