import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {

  constructor(
      private titleService: Title
  ) {
      this.titleService.setTitle('Send');
  }

  ngOnInit() {
  }

}
