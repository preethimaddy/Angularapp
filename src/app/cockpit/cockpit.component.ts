import { Component, EventEmitter, Output, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent {
@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
@Output('bluePrintCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
newServerName ='';
newServerContent ='';
  serverElements: any;

  @ViewChild('serverContentInput')
  serverContentInput: ElementRef;

constructor(){

}
ngOnInit(){

}
onAddServer(nameInput: HTMLInputElement){
  console.log(nameInput.value) ;
  this.serverCreated.emit({
    serverName: nameInput.value,
    serverContent: this.serverContentInput.nativeElement.value });
  
//  this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent });
}
onAddBluePrint(nameInput: HTMLInputElement){
  console.log(nameInput.value);
  // this.serverContentInput.nativeElement.value ='something';   //not a best practice use string interpolation;
  this.bluePrintCreated.emit({serverName: nameInput.value,
    serverContent: this.serverContentInput.nativeElement.value });
  // this.bluePrintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent });
}









}
