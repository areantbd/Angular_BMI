import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  age = 25
  weight = 60
  height = 170
  sex = ""

  constructor(private router: Router) {

  }

  changeHeight(event: any) {
    this.height = event.target.value
  }

  masc() {
    this.sex = "masc"
  }
  
  fem() {
    this.sex = "fem"
  }

  bmiCalc() {

    this.router.navigate(['/result'])
  }
} 
