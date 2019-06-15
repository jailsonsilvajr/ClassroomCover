import { Component, OnInit } from '@angular/core';
import {QuestionarioService} from '../Questionario.service'
import {Questionario} from '../../Questionario'


@Component({
  selector: 'app-desh-board',
  templateUrl: './desh-board.component.html',
  styleUrls: ['./desh-board.component.css']
})
export class DeshBoardComponent implements OnInit {

  constructor(private quesitonarioService : QuestionarioService) { }

  questionarios : Questionario[]
  ngOnInit() {
    this.quesitonarioService.getQuestionarios()
    .then(quest => {this.questionarios = quest});
  }

}
