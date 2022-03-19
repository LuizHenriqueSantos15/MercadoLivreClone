import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { ComprarService } from './comprar.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  produto : Produto[];
  pesquisa: string;
  nomeProduto : string;
  constructor(private service : ComprarService) { }

  ngOnInit() {;
    this.carregarPesquisa();
  }

  carregarProd(){
    this.service.carregarProduto().subscribe((produto : Produto[]) => {
      this.produto = produto;
      console.log(produto);
    })
  }

  carregarPesquisa(){
    this.service.carregarProdutoBySearch(this.service.receberPesquisa()).subscribe((produto : Produto[]) => {
      this.produto = produto;
      console.log(produto);
    })
  }

  btnPesquisaClicado(){
    this.service.carregarProdutoBySearch(this.pesquisa).subscribe((produto : Produto[]) => {
      this.produto = produto;
      console.log(produto);
      this.produto.forEach(element => {
        this.nomeProduto = this.pesquisa;
      });
    })
  }

}
