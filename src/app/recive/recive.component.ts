import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-recive',
  templateUrl: './recive.component.html',
  styleUrls: ['./recive.component.scss']
})
export class ReciveComponent implements OnInit {

  constructor(
      private titleService: Title
  ) {
      this.titleService.setTitle('Receive');
  }

  ngOnInit() {
  }

}
