export class Objective {
  value:number;
  objective:TypeOfObjective;
  action:TypeOfAction;

  constructor(_value:number,_objective:TypeOfObjective,_action:TypeOfAction){
    this.value = _value;
    this.objective = _objective;
    this.action = _action;
  }
  public GetValue():number{
    return this.value;
  }
  public GetObjective():string{
    return this.objective.toString();
  }
  public GetAction():string{
    return this.action.toString();
  }
}

export enum TypeOfObjective{
  PLANO_DE_ENSINO,PLANO_DE_AULA,RECURSOS_PEDAGÓGICOS,ATIVIDADE,
  FAVORITAR,RECOMENDAR,AVALIAR,COMENTAR,
  TIPO_DE_RECURSO,GRUPO_DE_EXECUÇÃO,DISCIPLINA,PROFESSOR
}
export enum TypeOfAction{
  CADASTRO,CRIAÇÃO,ENGAJAR,EDIÇÃO
} 
