import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Detalle } from 'src/app/models/detalle';
import { DetalleService } from 'src/app/services/detalle.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() deta?: Detalle;
  @Output() detaUpdated = new EventEmitter<Detalle[]>();

  constructor(private detalleService: DetalleService) {}

  ngOnInit(): void {
  }

  updateDetalle(deta: Detalle) {
    this.detalleService
    .updateDetalle(deta)
    .subscribe((detas: Detalle[]) => this.detaUpdated.emit(detas));
  }

  deleteDetalle(deta: Detalle) {
    this.detalleService
    .deleteDetalle(deta)
    .subscribe((detas: Detalle[]) => this.detaUpdated.emit(detas));
  }

  createDetalle(deta: Detalle) {
    this.detalleService
    .createDetalle(deta)
    .subscribe((detas: Detalle[]) => this.detaUpdated.emit(detas)),
    {};
  }


}
