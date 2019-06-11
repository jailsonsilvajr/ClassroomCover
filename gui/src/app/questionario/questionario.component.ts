import { Component, OnInit } from '@angular/core';
import {Questionario} from '../../Questionario'
import {Questao} from '../../Questao'

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  constructor() { }

  questionario : Questionario = new Questionario();
  questaoAtual : Questao = new Questao();



  ngOnInit() {
    this.questionario.titulo = "teste teste teste";
    this.questionario.titulo = "teste"
    let questao : Questao = new Questao();
    
    let questaoGrupo : Questao[] =  new Array();
    questaoGrupo.push(questao);

    this.questionario.questoes = questaoGrupo;
  }

}
