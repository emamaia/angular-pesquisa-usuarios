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
 

  
  constructor(
   private pesquisaUsuarioService: PesquisaUsuarioService
   
  ) {
     console.log(pesquisaUsuarioService);
      
  }

  ngOnInit(): void {
    this.listaPaises = this.pesquisaUsuarioService.getListaPaises();
    this.listaGender = this.pesquisaUsuarioService.getListaGender();
  }

  
  onSubmit(form) {
    console.log(form.value)
          this.valorBusca = form.value.true
      console.log(this.valorBusca)     
    
  }

  onCheckBoxChange($event){
    
  }


}
