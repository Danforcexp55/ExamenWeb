import { Component, OnInit } from '@angular/core';
import { Detalle } from 'src/app/models/detalle';
import { DetalleService } from 'src/app/services/detalle.service';
//import { Detalle } from './models/detalle';
//import { DetalleService } from '../services/detalle.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'detalleweb';
  detalles: Detalle[] = [];
  detaToEdit?: Detalle;

  constructor(private detalleService: DetalleService) { }

  ngOnInit() : void {
    this.detalleService
    .getDetalles()
    .subscribe((result: Detalle[]) => (this.detalles = result));
  }

  updateDetalleList(detalles: Detalle[]){
    this.detalles = detalles;
  }

  initNewDeta(){
    this.detaToEdit = new Detalle();

  }

  editDeta(deta: Detalle){
    this.detaToEdit = deta;
  }

}
