import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'au-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() title: string = '';
  @Input() selected: boolean = false;

  constructor() {}

  ngOnInit() {}
}
