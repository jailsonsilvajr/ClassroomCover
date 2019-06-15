import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Questionario } from 'src/Questionario';

@Injectable()
export class QuestionarioService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: Http) { }

  criar(questionario: Questionario) : boolean {

     this.http.post('http://localhost:3000/Questionarios', JSON.stringify(questionario), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return true} else {return null;}
           })
           .catch(this.tratarErro);

      return false;
  }


  getQuestionarios(): Promise<Questionario[]> {
    return this.http.get(this.taURL + "/Questionarios")
             .toPromise()
             .then(res =>  res.json())
             .catch(this.tratarErro);
  }



  private tratarErro(erro: any): Promise<any>{
    console.error('Acesso mal sucedido ao serviço de alunos',erro);
    return Promise.reject(erro.message || erro);
  }
}