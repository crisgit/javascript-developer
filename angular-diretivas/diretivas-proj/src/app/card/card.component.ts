import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  produtos:string[] = [];
  menuType:string = "userFake";

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "font"
    ]
  }

  ngOnInit(): void {

  }

  adicionar() {
    this.produtos.push("carregador");
  }

  retirar() {
    this.produtos.pop();
  }

  remover(index: number) {
    alert(index);
    this.produtos.splice(index, 1);
  }
}
