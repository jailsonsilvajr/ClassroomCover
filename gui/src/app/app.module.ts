import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { RouterModule } from '@angular/router';
import { ProfessorComponent } from './professor/professor.component';
import { AlunoAddComponent } from './aluno-add/aluno-add.component';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { FormsModule } from '@angular/forms';
import {AlunoService} from './aluno.service'

@NgModule({
  declarations: [
    AppComponent,
    QuestionarioComponent,
    ProfessorComponent,
    AlunoAddComponent,
    AlunoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'Questionario',
        component: QuestionarioComponent
      },
      {
        path: 'Professor',
        component: ProfessorComponent
      },
      {
        path: 'Alunoadd',
        component: AlunoAddComponent
      }
    ])
  ],
  providers: [AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
