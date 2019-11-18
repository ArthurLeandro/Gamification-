import {Injectable,} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Ranking} from 'src/app/classes/namespaces/ranking';

//#region Services
@Injectable({
  providedIn: 'root'
})
export class RankingService {
  readonly URL:string = "";

  constructor(private http: HttpClient, _url:string){this.URL = _url;}

  //buscar dados
  public GetEntries(_typeOfAction:string):Ranking.RankingEntry[]{
    let params = new HttpParams().set('typeOfAction',_typeOfAction);
    let entries;
    try {        
    entries = this.http.get<Ranking.RankingEntry[]>(this.URL);
    } catch (error) {
      console.log(error);
      entries = null;
    }
    return entries as Ranking.RankingEntry[]; 
  }
  //entregar dados
  public  PostEntries():boolean{
    let result = false;
    try {
      result = true;
    } catch (Error) {
      console.log(Error);
      result = false;
    }
    return result;
  }
  //ordenar dados
}
//#endregion