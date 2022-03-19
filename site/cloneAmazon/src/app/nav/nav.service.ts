import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
constructor() { }

txt:string;

getPesquisa(txtPesquisa:string){
  this.txt = txtPesquisa;
}

pegarPesquisa(){
  return this.txt;
}

}
