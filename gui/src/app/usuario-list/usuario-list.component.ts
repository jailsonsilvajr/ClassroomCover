import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../Usuario';
import {UsuarioService} from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  constructor(private usuarioService : UsuarioService , private router :Router ) { }
  
  usuarios: Usuario[];

  acessos : ['Aluno' , 'Professor']

  addUsuario(){
    this.router.navigate(['UsuarioAdd'])
  }

  ngOnInit() {

    this.usuarioService.getUsuarios()
    .then(as => this.usuarios = as)
    .catch(erro => alert(erro));
    

  }

}
