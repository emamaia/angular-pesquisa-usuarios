import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PesquisaUsuarioService {

  constructor(    
  ) { }

  getListaGender(){
   return [
      {'nome': 'Masculino', 'id': 'm'},
      {'nome': 'Feminino', 'id': 'f'},
      {'nome': 'Ambos', 'id': 'a'}
     ]
  }
  getListaPaises(){
    return [
      {'nome': 'Austrália', 'id': 'a'},
      {'nome': 'Brasil', 'id': 'a'},
      {'nome': 'Canadá', 'id': 'c'},
      {'nome': 'França', 'id': 'f'},
      {'nome': 'Estados Unidos', 'id': 'e'} 
    ]
  }

}
