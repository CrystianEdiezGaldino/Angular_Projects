import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-componet',
  templateUrl: './first-componet.component.html',
  styleUrls: ['./first-componet.component.css']
})
export class FirstComponetComponent implements OnInit {
  name : string = "Crystian";
  age : number  = 28;
  job  = "Estágiario";
  hobbies = ["Correr","joga"];
  car ={
name: "polo",
year: 2020,
};


  constructor() { }

  ngOnInit(): void {
  }

}
