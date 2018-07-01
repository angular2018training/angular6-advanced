import { ModalService } from './../services/modal.service';
import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'au-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss']
})
export class MyModalComponent implements OnInit {
  @Input() body: TemplateRef<any>;
  @Input() hideOnClickOutside: boolean = true;
  @Input() hideOnEsc: boolean = true;
  @Input() context: any;

  constructor(
    private _modalService: ModalService,
    private _eventManager: EventManager
  ) {}

  ngOnInit() {
    this._eventManager.addGlobalEventListener('window', 'keyup.esc', () => {
      if (this.hideOnEsc) {
        this.onCloseModal();
      }
    });
  }

  onCloseModal() {
    if (this.hideOnClickOutside) {
      this._modalService.close();
    }
  }

  onCancelClick(e) {
    e.preventDefault();
    e.stopPropagation();
  }
}
