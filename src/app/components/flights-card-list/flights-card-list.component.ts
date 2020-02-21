import { Component, OnInit, Input } from '@angular/core';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-flights-card-list',
  templateUrl: './flights-card-list.component.html',
  styleUrls: ['./flights-card-list.component.css']
})
export class FlightsCardListComponent implements OnInit {
  @Input()
  flights: Flight[];
  constructor() { }

  ngOnInit() {
    console.log(this.flights)
  }

}
