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
  listaUsuarios = [];
  listaUsers = [];


  valorBusca: any;
  usuarios: any;
  salvaPesquisa: [];

  erro = false;
  salvaPesquisaTexto = false
  loading = false;
  erroApi: boolean;



  constructor(
    private pesquisaUsuarioService: PesquisaUsuarioService,

  ) {
    console.log(pesquisaUsuarioService);

  }

  ngOnInit(): void {
    this.listaPaises = this.pesquisaUsuarioService.getListaPaises();
    this.listaGender = this.pesquisaUsuarioService.getListaGender();

  }


  onSubmit(form) {
    console.log('Este é o formulário', form)

    if (!form.valid) {
      console.log('formulário inválido')
      return this.erro = true
    }
    console.log('ERRO', this.erro)

    this.valorBusca = form.value;
    console.log(this.valorBusca);

    this.listaUsers = Object.keys(this.valorBusca).map(key => ({
      type: key,
      value: this.valorBusca[key]
    }))
    console.log('USER', this.listaUsers);

    this.loading = true;
    this.pesquisaUsuarioService.filtroApi(this.extrairFiltros())
      .subscribe(response => {
        this.loading = false;
        this.usuarios = response;
        this.listaUsuarios = this.usuarios.results;
        console.log(this.listaUsuarios);
      },
        error => {
          this.loading = false;
          this.erroApi = true;

        }
      )

  }


  extrairFiltros() {
    let filtro = '';
    if (this.listaUsers[0].value !== '') {
      filtro = filtro + '&gender=' + this.listaUsers[0].value;
    }
    let temPais = false
    for (let i = 1; i < this.listaUsers.length; i++) {
      if (this.listaUsers[i].value) {
        filtro = filtro + (temPais ? `,${this.listaUsers[i].type}` : `&nat=${this.listaUsers[i].type}`)
        temPais = true;
      }

    }

    return filtro
  }

  onClick(event) {
    console.log('eu ouvi o click')
    this.salvaPesquisaTexto = !this.salvaPesquisaTexto
    this.salvaPesquisa = sessionStorage.setItem('listaUsers', JSON.stringify(this.listaUsers));
    console.log('ESSE É O SALVO', this.salvaPesquisa)
  }


}
