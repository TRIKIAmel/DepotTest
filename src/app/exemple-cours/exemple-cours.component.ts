import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemple-cours',
  templateUrl: './exemple-cours.component.html',
  styles: []
})
export class ExempleCoursComponent implements OnInit {

  titre= "Interpolation";
  activation =true;
  
  
  
  
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
  onAffiche(chaine:string)
  {
    console.log(chaine);
  }
  onKeyUp(event:KeyboardEvent)
   {
     console.log((<HTMLInputElement>event.target).value);
   }
  constructor() { }

  ngOnInit() {
  }

}
