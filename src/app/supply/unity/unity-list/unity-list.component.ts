import { map } from 'rxjs/operators';
import { Unity } from './../../../entity';
import { Observable } from 'node_modules/rxjs';
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { UnityService } from '../unity.service';

@Component({
  selector: 'app-unity-list',
  templateUrl: './unity-list.component.html',
  styleUrls: ['./unity-list.component.css']
})
export class UnityListComponent implements OnInit, OnChanges {

  list = [];
  @Input() novoPost: any;

  constructor(
    private service: UnityService
  ) { }

  ngOnInit() {
    // o metodo ngoninit ja esta chamando o getallentity, se nao fica com duas requisições get
    this.getAllEntity();
  }


  getAllEntity() {
    this.service.getAll()
      .pipe(
        map(resp => resp.content))
      .subscribe(data => {
        this.list = data;
       // console.log(data);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAllEntity();
    console.log(changes);
  }


}
