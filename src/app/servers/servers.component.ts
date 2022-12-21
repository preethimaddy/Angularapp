import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {
      allowNewServer = false;
      serverCreationStatus = 'No server was Created';
      serverName ='TestServer';
      serverCreated = false;
      servers = ['TestServer', 'TestServer2'];
      showSecret= false;
       log:any = [];
      
      constructor(){
        setTimeout(() => {
          this.allowNewServer = true;
        }, 4000);
      }
      ngOnInit(){
      
      }
      onCreateServer() {
        this.serverCreated= true;
        this.servers.push(this.serverName)
      }
      Toggle(){
        this.showSecret=!this.showSecret;
        // this.log.push(this.log.length +1);
        this.log.push(new Date());
      } 
}
