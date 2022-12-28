import { Component, OnInit, Input, ViewEncapsulation, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent  implements OnInit{
  @Input('srcElement') element: { type: string; name: string; content: string; }  ;
  @Input() name: string;
  constructor(){
console.log("constructor called:");

  }
  ngOnInit(){
    console.log("ngOnInit called:");
  }
ngOnChanges(changes :SimpleChanges){
  console.log("ngOnChanges called:");
  console.log(changes);
  
}
}
