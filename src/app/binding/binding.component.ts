import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  titre:string ='La liaison de données';
  valeurs =['Ali', 'Aroua', 'Samir', 'Wafa'];
  resultat:string ='';

  constructor() { }

  /*onClick(ch:any)
  {console.log('Ceci est un test');
this.titre +='*';
this.resultat = 'Le message introduit est:'+ ch.value;

}*/

onClick()
  {console.log('Ceci est un test');
}
}
