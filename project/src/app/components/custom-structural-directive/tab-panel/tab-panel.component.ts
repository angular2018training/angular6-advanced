import { TabComponent } from './../tab/tab.component';
import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  TemplateRef,
  Input
} from '@angular/core';

@Component({
  selector: 'au-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css']
})
export class TabPanelComponent implements OnInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Input() headerTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    const selected = this.tabs.find(tab => tab.selected);
    if (!selected && this.tabs.first) {
      this.tabs.first.selected = true;
    }
  }

  selectTab(tab) {
    this.tabs.forEach(tab => (tab.selected = false));
    tab.selected = true;
  }

  get tabsContext() {
    return {
      tabs: this.tabs
    };
  }
}
