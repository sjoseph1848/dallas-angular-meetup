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
  constructor(private db: AngularFirestore) { }

  ngOnInit() {

   this.flights$ = this.db.collection('flights').snapshotChanges()
      .pipe(map(snaps => {
        return snaps.map(snap => {
          return <Flight> {
            id: snap.payload.doc.id,
            ...snap.payload.doc.data()
          };
        });
      }));
  }

}
