import { Gamification } from '../../classes/namespaces/gamification';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  // ranking: Ranking.RankingTemplateSortable;

  // constructor(private rankingService: Ranking.RankingService) {
  //   this.ranking = new Ranking.RankingTemplateSortable();
  //}
  ngOnInit() {
    // this.ranking.displayedColumns = [Ranking.COLUMNS_MERIT];
    // let testSubject = this.CreateTestInterface();
    // this.ranking.entriesData = testSubject;
  }
  // public CreateTestInterface():Ranking.RankingEntry[]{
  //   let arrayOfTest : Ranking.RankingEntry[];
  //   return arrayOfTest;
  // }
  // public ChangeColumnsProfile(_nameOfActualPage: string): void {
  //   if (_nameOfActualPage != "Mérito") {
  //     this.ranking.displayedColumns = [Gamification.Ranking.COLUMNS_ENGAGENEMET];
  //   }
  //   else {
  //     this.ranking.displayedColumns = [Gamification.Ranking.COLUMNS_MERIT];
  //   }
  // }
  // public GetEntriesSortedData(_typeOfAction: string): void {
  //   this.ranking.entriesData = this.rankingService.GetEntries(_typeOfAction);
  // }

  //#region EVENTS
    public OnRecoverData():void{}
    public OnSetData():void{}
    public OnSortRanking():void{}
    public OnViewRanking():void{}
    public OnChangeRanking():void{}
  //#endregion


}

