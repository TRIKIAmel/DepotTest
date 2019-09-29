import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  titre="Produit de 2 nombres";
  produit:number =0;
  nb1:number =0;
   nb2: number =0;
  constructor() { }

  ngOnInit() {
  }
  onProduit()
  {
  this.produit= this.nb1*this.nb2;
  }
}
