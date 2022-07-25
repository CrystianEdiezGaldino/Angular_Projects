import { Component, OnInit , OnChanges } from '@angular/core';
import { flushMicrotasks } from '@angular/core/testing';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];
   
  animalDetails: string = " ";

  constructor(private listService: ListService) { 
    this.getAnimals();
    //inicializa no inicio do projeto
  console.log("construtor ");
    
  }

  ngOnInit(): void {
    console.log("OnInit ");
    //quando o componente é renderizado na aplicação;
  }
    ngOnChanges(){
      console.log("OnInit ");
    }
  showAge = (animal: Animal) =>{
  this.animalDetails = `O pet ${animal.name} tem ${animal.age} ano${animal.age > 1 ? "s":""} !`;
   
  //if ternário (3 termos ) : "condição ? entao : senao"
  }
  removeAnimal(animal : Animal){
    this.animals = this.animals.filter((a)=> animal.name !== a.name);
    this.listService.remover(animal.id).subscribe();
  }
  getAnimals():void
  {
    this.listService.getAll().subscribe((animals) =>(this.animals = animals));
  }
}
