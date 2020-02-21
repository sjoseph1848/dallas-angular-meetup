import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-demo-one',
  templateUrl: './demo-one.component.html',
  styleUrls: ['./demo-one.component.css']
})
export class DemoOneComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  ngOnInit() {

    this.db.collection('flights').valueChanges().subscribe(
      val => console.log(val)
    )
  }

}
