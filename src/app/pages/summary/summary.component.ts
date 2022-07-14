import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  data: any
  constructor() {
    this.data = history.state.data
    console.warn(history.state.data)

    this.data = JSON.parse(localStorage.getItem("computations")!)
  }

  ngOnInit(): void {
  }

}
