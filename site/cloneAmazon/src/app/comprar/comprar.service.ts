import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';
import { NavService } from '../nav/nav.service';

@Injectable({
  providedIn: 'root'
})
export class ComprarService {

constructor(private http: HttpClient, private service: NavService) { }

pesquisa:string;

carregarProduto(): Observable<Produto[]>{
  return this.http.get<Produto[]>('https://localhost:5001/mercado/api/produtos');
}

receberPesquisa(){
  return this.service.pegarPesquisa();
}

carregarProdutoBySearch(search:string): Observable<Produto[]>{
  return this.http.get<Produto[]>('https://localhost:5001/mercado/api/produtos/' + search) ;
}

}
