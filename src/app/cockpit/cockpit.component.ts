import { Component } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent {


newServerName ='';
newServerContent ='';
  serverElements: any;



constructor(){

}
ngOnInit(){

}
onAddServer(){

 this.serverElements.push({
  type:'server',
  name: this.newServerName,
  content: this.newServerContent
});
}
onAddBluePrint(){
  this.serverElements.push({
    type:'blueprint',
    name: this.newServerName,
    content: this.newServerContent
  });
}









}
