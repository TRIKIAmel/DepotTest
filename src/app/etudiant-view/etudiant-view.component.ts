import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant-view',
  templateUrl: './etudiant-view.component.html',
  styleUrls: ['./etudiant-view.component.css']
})
export class EtudiantViewComponent implements OnInit {

tabCandidats = [
{nom:'Popey',image:'../assets/popey.jpg', nb:16, parti:true},
{nom:'Sam',image:'../assets/happy.jpg', nb:14, parti:false },
{nom:'Donald',image:'../assets/donald.png', nb:44, parti:false}
];
/*
onFollow(pers:any)
{
  console.log(pers.nom);
  pers.nb ++;
}*/
onFollow(indice:number)
{
  this.tabCandidats[indice].nb ++;
}
nbIndependants()
{
  let nbi=0;
  for(let pers of this.tabCandidats)
  {
    if (!pers.parti)
    nbi ++;
  }
  return nbi;
}
  constructor() { }

  ngOnInit() {
  }

}
