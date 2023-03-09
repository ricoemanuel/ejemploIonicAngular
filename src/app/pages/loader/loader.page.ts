import { Component, OnInit } from '@angular/core';
import * as Mathjs from 'mathjs';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.css'],
})
export class LoaderPage implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }

  ingreso: string = ""
  ponerNum(numero: string) {

    this.ingreso += numero
  }
  calcular() {
    this.ingreso = Mathjs.evaluate(this.ingreso);
  }
  eliminarNum() {
    this.ingreso = this.ingreso.slice(0, -1)
  }
  limpiar(){
    this.ingreso=""
  }

}