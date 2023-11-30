import { Component,OnInit } from '@angular/core';
import { MedicoService } from 'src/service/MedicoService';
import { MedicoModel } from 'src/model/MedicoModel';
import { Router, ActivatedRoute } from '@angular/router';
import { MatFormFieldModule} from '@angular/material/form-field';
import { IMedico } from 'src/inteface/IMedico';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent  implements OnInit {

  model: MedicoModel = new MedicoModel();

  constructor(
    private medicoSrv: MedicoService,
    private router: Router,
    private active: ActivatedRoute
  ) { }

  ngOnInit() {
    this.active.params.subscribe(p => this.getId(p['id']));
    console.log("Cheguei")
  }

  async getId(id: string): Promise<void> {
    if (id === 'new') { return; }
    const result = await this.medicoSrv.GetById(id);
    this.model = result.data as MedicoModel;
  }

  async save(): Promise<void> {
    let id = (this.model.id)?.toString()

    const result = await this.medicoSrv.post(this.model,id);
    if (result.sucesso) {
      this.router.navigateByUrl('/medicos');
    }
  }
}
