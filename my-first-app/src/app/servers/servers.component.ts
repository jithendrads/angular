import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus="No server created";
  serverName="TestServer";
  userName="";
  serverCreated=false;
  servers=['Testserver','Testserver2'];

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer()
  {
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus="Server Created with the name"+this.serverName;
  }

  onUpdateServer(event:Event)
  {
console.log(event);
this.serverName=(<HTMLInputElement>event.target).value;

  }
}
