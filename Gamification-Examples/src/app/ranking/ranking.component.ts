import { Ranking } from './ranking';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  ranking: Ranking.RankingTemplateSortable;

  constructor(private rankingService: Ranking.RankingService) {
    this.ranking = new Ranking.RankingTemplateSortable();
  }
  ngOnInit() {
    this.ranking.displayedColumns = [Ranking.COLUMNS_MERIT];
    let testSubject = this.CreateTestInterface();
    this.ranking.entriesData = testSubject;
  }
  public CreateTestInterface():Ranking.RankingEntry[]{
    let arrayOfTest : Ranking.RankingEntry[];
    return arrayOfTest;
  }
  public ChangeColumnsProfile(_nameOfActualPage: string): void {
    if (_nameOfActualPage != "Mérito") {
      this.ranking.displayedColumns = [Ranking.COLUMNS_ENGAGENEMET];
    }
    else {
      this.ranking.displayedColumns = [Ranking.COLUMNS_MERIT];
    }
  }
  public GetEntriesSortedData(_typeOfAction: string): void {
    this.ranking.entriesData = this.rankingService.GetEntries(_typeOfAction);
  }

}

