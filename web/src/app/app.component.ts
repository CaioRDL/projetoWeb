import { Component, OnInit } from '@angular/core';
import data from '../assets/data.json';
import { UsuarioService } from 'src/service/UsuarioService';
import { MedicoService } from 'src/service/MedicoService';
import { HttpService } from 'src/service/HttpService';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{ 
   
  
  users:any

  constructor(private MedicoSrv: MedicoService) {
   
  }

  ngOnInit(): void {
   // this.bind() 
    //this.users = data.Medicos   
  }     
    
  async bind(){     
   //const Medicos = await this.MedicoSrv.GetAll();   
   //console.log (Medicos)
   // this.users = Medicos.data
  }


  

}
 