import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PesquisaUsuarioService {

  constructor(    
  ) { }

  getListaGender(){
   return [
      {'nome': 'Masculino', 'valor': 'male'},
      {'nome': 'Feminino', 'valor': 'female'},
      {'nome': 'Ambos', 'valor': 'ambos'}
     ]
  }
  getListaPaises(){
    return [
      {'nome': 'Austrália', 'valor': 'Australia'},
      {'nome': 'Brasil', 'valor': 'Brazil'},
      {'nome': 'Canadá', 'valor': 'Canada'},
      {'nome': 'França', 'valor': 'France'},
      {'nome': 'Estados Unidos', 'valor': 'United States'} 
    ]
  }

}
