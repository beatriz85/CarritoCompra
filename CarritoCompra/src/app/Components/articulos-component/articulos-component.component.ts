import { NgClass } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {Articulo} from '../../../models/ArticulosComponent.js';
@Component({
  selector: 'app-articulos-component',
  templateUrl: './articulos-component.component.html',
  styleUrls: ['./articulos-component.component.scss']
})
export class ArticulosComponentComponent implements OnInit {
   articulo:Articulo[];
  constructor() {
    this.articulo=[];
    let ar=new Articulo("pepe es guay", "pepe es guay","pepe es guay","pepe es guay","pepe es guay","pepe es guay","pepe es guay","pepe es guay");
    this.articulo.push(ar);
   }

  ngOnInit(): void {
  }

}
