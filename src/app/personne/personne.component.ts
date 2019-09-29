import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  nom= "Popey";
  chemin="../assets/popey.jpg";
  age:number =16;
  constructor() { }

  ngOnInit() {
  }

}
