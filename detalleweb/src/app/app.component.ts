import { Component } from '@angular/core';
import { Detalle } from './models/detalle';
import { DetalleService } from './services/detalle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'detalleweb';
  detalles: Detalle[] = [];
  detaToEdit?: Detalle;

  constructor(private detalleService: DetalleService) {}

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
