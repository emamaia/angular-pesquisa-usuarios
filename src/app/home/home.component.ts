import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private usuariosService: HomeService
  ) { }

  usuarios: any;
  
  ngOnInit(): void {
   this.usuariosService.getPesquisa()
   .subscribe(response => {
    this.usuarios = response;
    console.log(this.usuarios.results
      )
   })
    
  }

}
