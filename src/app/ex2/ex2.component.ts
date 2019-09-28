import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {

  etud:boolean = true;
  age:number =25;
  moyenne=0;
  minimum :number  =20;

   onMin()
  {
    console.log("min ="+this.minimum);
    this.minimum ++;
  }


  constructor() {
console.log(this.minimum);
   }

  ngOnInit() {
  }

}
