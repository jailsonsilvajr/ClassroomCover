import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Usuario } from '../Usuario';

@Injectable()
export class UsuarioService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: Http) { }

  criar(Usuario: Usuario) {
     console.log('chegou'); 
     this.http.post('http://localhost:3000/aluno',{'teste' : 'qweuqhwuh'}, {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {console.log("sucesso ao inserir aluno")} else {return null;}
           })
           .catch(this.tratarErro);
  }


  getUsuarios(): Promise<Usuario[]> {
    return this.http.get(this.taURL + "/Usuarios")
             .toPromise()
             .then(res => res.json() as Usuario[])
             .catch(this.tratarErro);
  }



  private tratarErro(erro: any): Promise<any>{
    console.error('Acesso mal sucedido ao serviço de alunos',erro);
    return Promise.reject(erro.message || erro);
  }
}