import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    QuestionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'Questionario',
        component: QuestionarioComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
