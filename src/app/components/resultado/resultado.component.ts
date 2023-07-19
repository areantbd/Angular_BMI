import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  result: string
  interpr: string
  bmi: number

  constructor(private route: ActivatedRoute) {
    this.result = ""
    this.interpr = ""
    this.bmi = +route.snapshot.paramMap.get('valor')!
  }

  ngOnInit() {
    this.getResult()
  }

  getResult() {
    if (this.bmi <= 18.4) {
      this.result = "Underweight"
      this.interpr = "You are under your ideal weight"
    } else if (this.bmi >= 18.5 && this.bmi <= 24.9) {
      this.result = "Normal"
      this.interpr = "Well done"
    } else if (this.bmi >= 25 && this.bmi <= 39.9) {
      this.result = "Overweight"
      this.interpr = "Your weight it's hight. Try to do more exercise"
    } else {
      this.result = "Obese"
      this.interpr = "Your weight it's too hight. Need to loose weight"
    }
  }

}
