import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.css']
})
export class ClassificationComponent {

  idGroup: any;
  @Output() idTest = new EventEmitter();

  // pega o id vindo do grupo e retornar para ser usado pelo subgrupo
  aoSelecionar(id) {
   this.idGroup = id;
  }


}
