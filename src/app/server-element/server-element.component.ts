import { Component, OnInit, Input, ViewEncapsulation, SimpleChanges, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, ViewChild, ElementRef, ContentChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {
  @Input('srcElement') element: { type: string; name: string; content: string; }  ;
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph')  paragraph: ElementRef
  constructor(){
console.log("constructor called:");

  }
  ngOnInit(){
    console.log("ngOnInit called:");
    console.log('Text Content:'+this.header.nativeElement.textContentview);
    console.log('Text Content of paragraph:'+this.paragraph.nativeElement.textContentview);
    
  }
ngOnChanges(changes :SimpleChanges){
  console.log("ngOnChanges called:");
  console.log(changes);
  
}
ngDoCheck(){
  console.log('ngDoCheck called:')
}

ngAfterContentInit(){
  console.log('AfterContentInit called:');
  console.log('Text Content of paragraph:'+this.paragraph.nativeElement.textContentview);
}
ngAfterContentChecked(){
  console.log('AfterContentChecked called:')
}
ngAfterViewChecked(){
  console.log('AfterViewChecked called:')
}
ngOnDestroy() {
  console.log('ondestroy called:') 
}
}
