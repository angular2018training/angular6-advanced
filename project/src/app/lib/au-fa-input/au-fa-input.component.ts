import { InputRefDirective } from './../common/input-ref.directive';
import {
  Component,
  OnInit,
  Input,
  ContentChild,
  AfterContentInit,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class AuFaInputComponent implements OnInit, AfterContentInit {
  @Input() icon: string;
  @Input() placeholder: string = '';
  @ContentChild(InputRefDirective) input: InputRefDirective;

  constructor() {}

  ngOnInit() {}

  get classes() {
    const cssClasses = {};
    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }
    return cssClasses;
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  ngAfterContentInit() {
    console.log('input: ', this.input);
  }
}
