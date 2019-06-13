import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../Usuario'
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  constructor(private usuarioService  : UsuarioService , private router :Router) { }

  ngOnInit() {
  }

  onClickSubmit(formData) {
    var usuario : Usuario = <Usuario>formData.value
    this.usuarioService.criar(usuario)
    
    setTimeout(() => 
    {
        this.router.navigate(['/UsuarioList']);
    },
    2000);
    //this.router.navigate(['UsuarioList']);
  }
}
