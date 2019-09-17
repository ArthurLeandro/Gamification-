import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material';

import { DialogTestComponent } from '../dialog-test/dialog-test.component';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(private dialog: MatDialog , public dialogText:DialogTestComponent) { }

  ngOnInit(){

  }
  ConfigureDialog() : MatDialogConfig{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    return dialogConfig;
  }

  OpenOnBoardingCard(){
    this.dialogText.title = "On Boarding";
    this.dialogText.textToBeShowned = "Este card cuida da iniciação do usuário com o sistema.";
    this.dialog.open(DialogTestComponent, this.ConfigureDialog());
  }
  OpenPontuacaoCard(){
    this.dialogText.title = "Pontuação";
    this.dialogText.textToBeShowned = "Este card cuida da pontuação responsável por metrificar a experiência do usuário.";
    this.dialog.open(DialogTestComponent, this.ConfigureDialog());
  }
  OpenMedalhasCard(){
    this.dialogText.title = "Medalhas";
    this.dialogText.textToBeShowned = "Este card cuida da recompensa para distinção das conquistas dos usuários mais engajados.";
    this.dialog.open(DialogTestComponent, this.ConfigureDialog());
  }
  OpenMissoesCard(){
    this.dialogText.title = "Missões";
    this.dialogText.textToBeShowned = "Este card cuida da parte que será responsável por manter o usuário desafiado.";
    this.dialog.open(DialogTestComponent, this.ConfigureDialog());
  }
  OpenNivelCard(){
    this.dialogText.title = "Nível";
    this.dialogText.textToBeShowned = "Este card cuida da parte responsável por destacar o engajamento do usuário.";
    this.dialog.open(DialogTestComponent, this.ConfigureDialog());
  }
  OpenReferenciasCard(){
    this.dialogText.title = "Referências";
    this.dialogText.textToBeShowned = "Este card contém as referências utilizadas para efetuar a gamificação do sistema.";
    this.dialog.open(DialogTestComponent, this.ConfigureDialog());
  }
}