import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  nom:string ="DSI";
  actif:boolean=false;
  contenu:string="";
  message:string="Message initial";


  nomComplet()
  {
    return this.nom +"21";
  }
  
  onAfficher(val:any)
  {
    console.log(this.nom);
  }
  /*
  onKeyUp(event:any)
  {
      this.contenu = event.target.value;
  }*/

  onKeyUp(event:KeyboardEvent)
  {
      this.contenu = 'Bonjour '+(<HTMLInputElement>event.target).value;
  }
  onAfficherContenu(val:string)
  {
    console.log(val);
  }
  constructor() { }

}
