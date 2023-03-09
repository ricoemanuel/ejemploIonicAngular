import { Component, OnInit } from '@angular/core';

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
  eliminarNum() {
    this.ingreso = this.ingreso.slice(0, -1)
  }
  sumar(numero1: number, numero2: number) {
    let suma = numero1 + numero2;
    return suma
  }

  restar(numero1: number, numero2: number) {
    let resta = numero1 - numero2;
    return resta
  }

  multiplicar(numero1: number, numero2: number) {
    let producto = numero1 * numero2;
    return producto
  }

  dividir(numero1: number, numero2: number) {
    let cociente = numero1 / numero2;
    return cociente
  }

  calcular() {
    // Eliminar espacios en blanco
  this.ingreso = this.ingreso.replace(/\s/g, '');
  
  // Crear un arreglo con los números y operaciones
  const arr: string[] = this.ingreso.split('');

  // Definir las operaciones y sus jerarquías
  const operations: { [key: string]: number } = {
    '^': 3,
    '*': 2,
    '/': 2,
    '+': 1,
    '-': 1
  };
  
  // Crear pilas para los números y operaciones
  const numStack: number[] = [];
  const opStack: string[] = [];

  // Recorrer el arreglo y realizar las operaciones
  arr.forEach(char => {
    if (!isNaN(Number(char))) {
      // Si el carácter es un número, agregarlo a la pila de números
      numStack.push(Number(char));
    } else {
      // Si el carácter es una operación, agregarla a la pila de operaciones
      while (
        opStack.length > 0 &&
        operations[char] <= operations[opStack[opStack.length - 1]]
      ) {
        const num2 = numStack.pop();
        const num1 = numStack.pop();
        const op = opStack.pop();
        const result = eval(`${num1} ${op} ${num2}`);
        numStack.push(result);
      }
      opStack.push(char);
    }
  });

  // Realizar las operaciones restantes
  while (opStack.length > 0) {
    const num2 = numStack.pop();
    const num1 = numStack.pop();
    const op = opStack.pop();
    const result = eval(`${num1} ${op} ${num2}`);
    numStack.push(result);
  }
  this.ingreso=numStack[0].toString()
  
  
  // Devolver el resultado
  /*if (numStack.pop!=undefined){
    this.ingreso=numStack.pop().toString
  }*/
  
  

}

}