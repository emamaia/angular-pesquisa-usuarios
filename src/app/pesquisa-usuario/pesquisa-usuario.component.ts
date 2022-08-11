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

  escondeSection = true;

  listaUsers = []
  
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
    this.escondeSection = false;

    this.listaUsers = Object.keys(this.valorBusca).map(key =>({
      type: key,
      value: this.valorBusca[key]
    }))

    console.log('USER', this.listaUsers)
    
  }

  onCheckBoxChange(event) {
    console.log(event.target.value)
   
  }

  // tranformaArray(valorInput){
  // let filterUser =[]
  //  for(key of Object.keys(valorInput)){
  //   filterUser.push(
  //     [key, valorInput[key]]
  //   )
  //  }
  //  return filterUser
  // }
    
  


}
