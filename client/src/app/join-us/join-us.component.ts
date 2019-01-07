import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {

  constructor() { }
  title = 'Association Bambou Kréyol';
  lat = 47.223159;
  lng = -1.595127199999979;
  ngOnInit() {
  }

  sendMail() {
      console.log('message envoyé');
    }
}


