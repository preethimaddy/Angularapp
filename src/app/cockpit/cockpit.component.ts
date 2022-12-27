import { Component, EventEmitter, Output, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent {


newServerName ='';
newServerContent ='';
  serverElements: any;
@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
@Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
@ViewChild('serverContentInput') serverContentInput: ElementRef;

constructor(){

}
ngOnInit(){

}
onAddServer(nameInput: HTMLInputElement){
  console.log(this.serverContentInput) ;
  this.serverCreated.emit({
    serverName: nameInput.value,
    serverContent: this.serverContentInput.nativeElement.value });
  
//  this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent });
}
onAddBluePrint(nameInput: HTMLInputElement){
  console.log(this.serverContentInput);
  this.serverContentInput.nativeElement.value='something';
  this.bluePrintCreated.emit({serverName: nameInput.value,
    serverContent: this.serverContentInput.nativeElement.value });
  // this.bluePrintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent });
}









}
