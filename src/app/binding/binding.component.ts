import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  nom:string ="Houda";
  age:number =20;
  actif:boolean=true;
  contenu:string="";
  message:string="Message initial";
/* Interpolation */

infos()  {
    return this.nom +" a pour âge " + this.age;
  }
  
  onAfficher()
  {
    console.log(this.nom);
  }
  
/*  onKeyUp(event:any)
  {
    console.log(event.target + " "+ event.target.value);
      this.contenu = event.target.value;
  }*/

  /* Event Binding */
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
