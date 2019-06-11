import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Aluno } from '../Aluno';
@Injectable()
export class AlunoService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: Http) { }

  criar(aluno: Aluno) {
     console.log('chegou'); 
     this.http.post('http://localhost:3000/aluno',{'teste' : 'qweuqhwuh'}, {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {console.log("sucesso ao inserir aluno")} else {return null;}
           })
           .catch(this.tratarErro);
  }

  private tratarErro(erro: any): Promise<any>{
    console.error('Acesso mal sucedido ao serviço de alunos',erro);
    return Promise.reject(erro.message || erro);
  }
}