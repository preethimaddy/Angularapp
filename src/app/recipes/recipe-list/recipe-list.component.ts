import { Component } from '@angular/core';
import { Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is simply a test',
  'https://r.search.yahoo.com/_ylt=AwrjYU6AFJtjfmsjn_ajzbkF;_ylu=c2VjA2ZwLWltZwRzbGsDaW1n/RV=2/RE=1671136512/RO=11/RU=http%3a%2f%2fwww.readrad.com%2fwp-content%2fuploads%2f2016%2f04%2fHealth-paleo-diet-recipes-chicken-blt-salad-2.jpg/RK=2/RS=lK5g7X.dyQwgIyjVne3lVUJKeSI-'),
  new Recipe('A Test Recipe', 'This is simply a test',
  'https://r.search.yahoo.com/_ylt=AwrjYU6AFJtjfmsjn_ajzbkF;_ylu=c2VjA2ZwLWltZwRzbGsDaW1n/RV=2/RE=1671136512/RO=11/RU=http%3a%2f%2fwww.readrad.com%2fwp-content%2fuploads%2f2016%2f04%2fHealth-paleo-diet-recipes-chicken-blt-salad-2.jpg/RK=2/RS=lK5g7X.dyQwgIyjVne3lVUJKeSI-'),
  

  ];
   constructor(){

   }
      ngOnInit(){

      }}
