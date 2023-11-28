import { Component,OnInit } from '@angular/core';
import { MedicoService } from 'src/service/MedicoService';
import { Router,ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { IMedico } from 'src/inteface/IMedico';
import { MedicoModel } from 'src/model/MedicoModel';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {  

  columns: string[] = ['id', 'Nome', 'Sobrenome'];
  dataSource!: MatTableDataSource<IMedico>;

  ngOnInit() {
    this.bind();
  }

  constructor(private MedicoSrv: MedicoService,
    private router: Router,
    private active: ActivatedRoute) {
  }

  async bind() {
    console.log("inicio")
    const Medicos = await this.MedicoSrv.GetAll();
    console.log ("----");
    console.log(Medicos);
    console.log ("----");
    this.dataSource = new MatTableDataSource(Medicos.data);    
  }

  async delete(Medico: MedicoModel): Promise<void> {
    const result = await this.MedicoSrv.delete(Medico.id);
    this.bind();     
    this.router.navigateByUrl('/Medicos');      
  }

}
