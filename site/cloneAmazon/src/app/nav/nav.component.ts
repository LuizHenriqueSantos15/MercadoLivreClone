import { Component, OnInit } from '@angular/core';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  produto:string;
  constructor(private service: NavService) { }

  ngOnInit() {
  }

  btnPesquisaClicado(){
    this.service.getPesquisa(this.produto);
    console.log(this.produto);
  }

}
