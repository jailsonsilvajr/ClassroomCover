import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {AlunoService} from '../aluno.service'
import {Aluno} from '../../Aluno'
@Component({
  selector: 'app-aluno-add',
  templateUrl: './aluno-add.component.html',
  styleUrls: ['./aluno-add.component.css']
})
export class AlunoAddComponent implements OnInit {

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
  }
  onClickSubmit(formData) {
    var aluno : Aluno = <Aluno>formData.value
    this.alunoService.criar(formData.value);
  }

}
