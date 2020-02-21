import { Component, OnInit } from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-demo-one',
  templateUrl: './demo-one.component.html',
  styleUrls: ['./demo-one.component.css']
})
export class DemoOneComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    //  valuechanges gives us a live connection to the db:
    //  will show latest text on the database.
    this.db.collection('flights').valueChanges().subscribe(
      val => console.log(val));


    //  snapshotChanges Example
    //  will always give us back the current state of the collection
    this.db.collection('flights').snapshotChanges()
      .subscribe(val => console.log(val));

    this.db.collection('flights').snapshotChanges()
        .subscribe(snaps => {
         const flights = snaps.map(snap => {
            return {
              id: snap.payload.doc.id,
              ...snap.payload.doc.data() as object
            };
          });
          console.log(flights);
        });

    //  lets see the value of the stateChanges() property
    //  if you make a change in the firestore db, you will see it here
    //  only gives us back incremental changes to the collection, only get notified about added, modified or deleted
    this.db.collection('flights').stateChanges()
        .subscribe(snaps => {
          console.log(snaps);
        });



  }

}
