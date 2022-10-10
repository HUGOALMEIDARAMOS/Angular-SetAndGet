import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  private _name = "";

  @Input()
  set name(name: string){
    //this._name = "your name: " + (name || '<name empty>') ;
    //tira os espacos atras e na frente
    this._name = "your name: " + (name.trim() || '<name empty>') ;
  }

  get name(): string{
    return this._name;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
