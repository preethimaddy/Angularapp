import { Component, OnInit } from '@angular/core';
import { ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  incredients: ingredients [] = [new ingredients('Apple',5),
  new ingredients('Tomatoes',6),new ingredients('Potatoes',7),];


  constructor(){

  }
 
  ngOnInit(){

  }
}
