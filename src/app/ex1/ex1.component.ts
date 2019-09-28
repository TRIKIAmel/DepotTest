import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {

  titre:string= "Opérations sur un tableau";
  tabNb =[18, 23, 58, 30];

  constructor() { 

  }

  minimum()
  {
    let min:number =this.tabNb[0];
    for(let nb of this.tabNb)
    {
      if (nb < min)
      min =nb
    }
    return min;
  }

  moyenne()
  {
    let somme =0;
    for(let nb of this.tabNb)
    {
      somme+= nb;
    }
    return somme/this.tabNb.length;
  }


  ngOnInit() {
  }

}
