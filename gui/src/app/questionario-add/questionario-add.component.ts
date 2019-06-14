import { Component, OnInit } from '@angular/core';
import {Questionario} from '../../Questionario'
import {Questao} from '../../Questao'
import {QuestionarioService} from '../Questionario.service'
@Component({
  selector: 'app-questionario-add',
  templateUrl: './questionario-add.component.html',
  styleUrls: ['./questionario-add.component.css']
})
export class QuestionarioAddComponent implements OnInit {

  constructor(private questionarioService : QuestionarioService) { }
  questoes : string[] = [];
 
  addQuestao()
  {
    var textoQuestao =  (<HTMLInputElement>document.getElementById('userinput')).value.toString();
    this.questoes.push(textoQuestao);
    (<HTMLInputElement>document.getElementById('userinput')).value = '';

  }

  salvarQuestionario(){  
    var tituloQuestionario =  (<HTMLInputElement>document.getElementById('tituloQuestionario')).value.toString();
    var questionario : Questionario =  new Questionario();
    var questoesGroup : Questao[] = []

    questionario.titulo = tituloQuestionario;
    this.questoes.forEach (function(value)
    {
      questoesGroup.push( new Questao(value))
    });

    questionario.questoes = questoesGroup;
    this.questionarioService.criar(questionario);
  }


  ngOnInit() {
  }

}
