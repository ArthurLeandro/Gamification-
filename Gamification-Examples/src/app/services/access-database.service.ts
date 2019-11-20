//#region Angular Directives
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//#endregion

//#region My Own Componenets
import { Gamification } from '../classes/namespaces/gamification';
//#endregion

@Injectable({
  providedIn: 'root'
})
export class AccessDatabaseService {
  readonly url: string = "";
  constructor(private http: HttpClient, _url: string) {
    this.url = _url;
  }
  //GET
  public Get(_type: Gamification.TypeOfGamification) {
    // switch (_type) {
    //   case Gamification.TypeOfGamification.LEVEL:
    //     let object;
    //     try {
    //       object = this.http.get(this.url);
    //     }
    //     catch (error) {
    //       throw new Error(error);
    //     }
    //     return object;
    //     break;

    //   default:
    //     break;
    // }
  }
  //POST
  //PUT
  //DELETE
}
