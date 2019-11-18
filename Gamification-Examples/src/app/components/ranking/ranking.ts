import { ViewChild, Injectable, Component, OnInit } from '@angular/core';
import { Gamification } from './../../classes/namespaces/gamification';


export namespace Ranking {

  // //#region Template
  // export class RankingManager extends Gamification.Gamification implements RankingConfigSortable {
  //   entriesData: Ranking.RankingEntry[];
  //   displayedColumns = [];
  // }
  // //#endregion

  // //#region DisplayedColumnsTemplate
  // export const COLUMNS_MERIT = ['author', 'school', 'discipline', 'followers', 'posts', 'likes'];
  // export const COLUMNS_ENGAGENEMET = ['author', 'name', 'numberOfDownloads', 'numberOfFavorites', 'school', 'discipline'];
  // //#endregion

//   export const MERIT_DATA: Ranking.MeritRankingEntry[] = [
//     { author: 'Lúcio Silveira', discipline: 'Redação', followers: 56712, posts: 23451, school: 'Governador Milton Campos', likes: 144 },
//     { author: 'João Marcos', discipline: 'Educação Física', followers: 1992, posts: 213, school: 'Laureano Pimentel', likes: 1 },
//     { author: 'Luciano Marques', discipline: 'Geografia', followers: 134562, posts: 2361, school: 'Professora Isaura Santos', likes: 124 },
//     { author: 'Roberto Damasceno', discipline: 'História', followers: 13452, posts: 521, school: 'Ana Alves Teixeira', likes: 14 },
//     { author: 'Luciana Guimarães', discipline: 'Matemátca', followers: 1892, posts: 261, school: 'Antônio Mourão', likes: 44 },
//   ];
//   export const ENGAGEMENT_DATA: Ranking.EngagementRankingEntry[] = [
//     { numberOfDownloads: 3453, numberOfFavorites: 243, author: "Carlos Martins", school: 'Governador Milton Campos', discipline: "História", name: "História Interativa" },
//     { numberOfDownloads: 303, numberOfFavorites: 1, author: "Alváro Dami~so", school: "Colégio Tiradentes", discipline: "Portugês", name: "Acentos na História" },
//     { numberOfDownloads: 13, numberOfFavorites: 23, author: "Ana Cláudia", school: "Maestro Villa Lobos", discipline: "Redação", name: "Redação 1000%" },
//     { numberOfDownloads: 1345, numberOfFavorites: 265, author: "Marcela Alvares", school: "Ordem e Progresso", discipline: "Matemátca", name: "Matemática para Enem" }
//   ];
// }
}