import { Component, OnInit } from '@angular/core';
import { initializeApp, database } from 'firebase';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo-one',
  templateUrl: './demo-one.component.html',
  styleUrls: ['./demo-one.component.css']
})
export class DemoOneComponent implements OnInit {
  items: Observable<any[]>
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.db.collection('passengers').valueChanges().subscribe(val => console.log(val))
  }

}
