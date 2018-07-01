import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'au-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {
  loginActive: boolean = true;

  constructor() {}

  ngOnInit() {}

  setLoginActive(value) {
    this.loginActive = value;
  }
}
