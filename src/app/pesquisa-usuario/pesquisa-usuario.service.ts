import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PesquisaUsuarioService {

  constructor(  
    private http: HttpClient  
  ) { }
  
  getPesquisa(){
    return this.http.get('https://randomuser.me/api/')
    }

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
