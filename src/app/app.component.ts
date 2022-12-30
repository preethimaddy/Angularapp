import { Component, EventEmitter, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testApp';
  serverElements= [{type: 'server', name:'Testserver', content: 'Just a TestBed'}];
onIntervalFired(firedNumber: number){
  console.log(firedNumber);
}
constructor(){


  
}

ngOnInit(){

}
onServerAdded(serverData: {serverName: string, serverContent: string}){

  this.serverElements.push({
   type:'server',
   name: serverData.serverName,
   content: serverData.serverContent
 });
 }
 onBluePrintAdded(bluePrintData: {serverName: string, serverContent: string}){
   this.serverElements.push({
     type:'blueprint',
     name: bluePrintData.serverName,
     content:bluePrintData.serverContent
   });
 }
 onChangeFirst(){
  this.serverElements[0].name='changed';
 }
 onChangeSecond(){
  this.serverElements[0].name='changed';
 }
}

