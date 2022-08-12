import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PesquisaUsuarioService {

  constructor(  
    private http: HttpClient  
  ) { }
  
  filtroApi(value){
    return this.http.get(`https://randomuser.me/api/?results=20${value}`)
    // throwError(new Error('Erro genérico'));
        
  }
  
  getPesquisa(){
    return this.http.get('https://randomuser.me/api/?results=20')
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
      {'nome': 'Austrália', 'valor': 'au'},
      {'nome': 'Brasil', 'valor': 'br'},
      {'nome': 'Canadá', 'valor': 'ca'},
      {'nome': 'França', 'valor': 'fr'},
      {'nome': 'Estados Unidos', 'valor': 'us'} 
    ]
  }


}
