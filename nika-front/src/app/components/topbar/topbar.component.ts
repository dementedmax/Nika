import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Subscriber } from 'rxjs'

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  date = new Observable<string>((observer: Subscriber<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

}
