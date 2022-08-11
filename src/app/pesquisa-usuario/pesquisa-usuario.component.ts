import { Component, OnInit } from '@angular/core';

import { PesquisaUsuarioService } from './pesquisa-usuario.service';

@Component({
  selector: 'app-pesquisa-usuario',
  templateUrl: './pesquisa-usuario.component.html',
  styleUrls: ['./pesquisa-usuario.component.scss']
})
export class PesquisaUsuarioComponent implements OnInit {

  listaPaises = [];
  listaGender = [];

  valorBusca: any;
  usuarios: any;
  listaUsuarios = []

   constructor(
      private pesquisaUsuarioService: PesquisaUsuarioService, 
            
  ) {
    console.log(pesquisaUsuarioService);
   
  }

  ngOnInit(): void {
    this.listaPaises = this.pesquisaUsuarioService.getListaPaises();
    this.listaGender = this.pesquisaUsuarioService.getListaGender();
    this.pesquisaUsuarioService.getPesquisa()
    .subscribe(response => {
     this.usuarios = response
     this.listaUsuarios = this.usuarios.results
     console.log(this.listaUsuarios)
    })
  }
  
  
  onSubmit(form) {
    this.valorBusca = form.value;
    console.log(this.valorBusca);      
         
  }

  onCheckBoxChange(event) {
    console.log(event.target.value)
 
  }
  

}
