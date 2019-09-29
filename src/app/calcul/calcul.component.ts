import { Component, OnInit } from '@angular/core';
import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
  titre: string ="Opérations de calcul";
  carre:number =0;
  somme:number=0;

  onCarre(event: KeyboardEvent)
  {
    let nb:number = parseInt((<HTMLInputElement>event.target).value);
    this.carre = nb *nb;
  }

  onSomme(nb1:string, nb2:string)
  {
    this.somme= parseInt(nb1) + parseInt(nb2);
  }
  constructor() { }

  ngOnInit() {
  }

}
