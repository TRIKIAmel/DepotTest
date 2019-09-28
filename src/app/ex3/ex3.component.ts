import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component implements OnInit {

  somme:number =0;
  nb1:number =0;
   nb2: number =0;

  constructor() { }

  ngOnInit() {
  }

  onCalculer()
  {

  this.somme =this.nb1+this.nb2;
  }

}