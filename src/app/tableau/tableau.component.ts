import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  titre:string= "Opérations sur un tableau";
  tabNb: number[] =[41, 18, 23, 58, 30];

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
    return (somme/this.tabNb.length).toFixed(2);
  }


  ngOnInit() {
  }

}
