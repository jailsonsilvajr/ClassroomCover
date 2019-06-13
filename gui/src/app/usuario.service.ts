import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Usuario } from '../Usuario';

@Injectable()
export class UsuarioService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: Http) { }

  criar(usuario: Usuario) : boolean {
     this.http.post('http://localhost:3000/Usuarios', JSON.stringify(usuario), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return true} else {return null;}
           })
           .catch(this.tratarErro);

      return false;
  }


  getUsuarios(): Promise<Usuario[]> {
    return this.http.get(this.taURL + "/Usuarios")
             .toPromise()
             .then(res =>  res.json())
             .catch(this.tratarErro);
  }



  private tratarErro(erro: any): Promise<any>{
    console.error('Acesso mal sucedido ao serviço de alunos',erro);
    return Promise.reject(erro.message || erro);
  }
}