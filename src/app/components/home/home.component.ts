import { Component, OnInit } from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Flight } from 'src/app/models/flight';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  flights$: Observable<Flight[]>;
  dallasFlights$: Observable<Flight[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {

   this.flights$ = this.db.collection('flights').snapshotChanges()
      .pipe(map(snaps => {
        return snaps.map(snap => {
          return {
            id: snap.payload.doc.id,
            ...snap.payload.doc.data() as object
          } as Flight;
        });
      }));

      this.dallasFlights$ = this.flights$.pipe(
        map(flights => flights.filter(
          flight => flight.departureCity.includes("Dallas"))));
  }

}
