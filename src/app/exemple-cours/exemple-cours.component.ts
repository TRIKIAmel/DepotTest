import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemple-cours',
  templateUrl: './exemple-cours.component.html',
  styles: []
})
export class ExempleCoursComponent implements OnInit {

  titre= "Interpolation";
  actif = true;
  val:string ="essai";
  taille()
  {
    return this.titre;
  }
  onTwoWay()
  {
    this.val +="****";
  }
  onAfficher()
  {
    console.log("ok");
  }
  constructor() { }

  ngOnInit() {
  }

}
