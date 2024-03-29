import { Gamification } from './../../classes/namespaces/gamification';
import { RankingSortedServiceService } from './../../services/ranking-sorted-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking-sorted',
  templateUrl: './ranking-sorted.component.html',
  styleUrls: ['./ranking-sorted.component.css']
})
export class RankingSortedComponent implements OnInit {

  constructor(private rankingSortedService:RankingSortedServiceService) { }

  ngOnInit() {
  }

  //#region VIEWER
  public GetDataSource():Gamification.DocumentationInformation[]{
    return this.rankingSortedService.rankingManager.GetElementData();
  }
  public GetColumns():string[]{
    return this.rankingSortedService.rankingManager.GetColumns();
  }

  //#endregion

  //#region EVENTS TO DEVELOP
  public OnNewEntry(_entry:Gamification.RankingEntry){
    this.rankingSortedService.rankingManager.AddEntry(_entry);
  }
  public OnAddEntry(_entry:Gamification.RankingEntry){
    this.rankingSortedService.rankingManager.AddEntry(_entry);
  } 
  public OnRemoveEntry(_entry:Gamification.RankingEntry){
    this.rankingSortedService.rankingManager.RemoveEntry(_entry);
  }
  //#endregion
  
  // ON NEW ENTRY
  // ADD ENTRY
  // REMOVE ENTRY 
  // SORT ENTRY
  // GET ENTRIES
  // SET ENTRIES

}
