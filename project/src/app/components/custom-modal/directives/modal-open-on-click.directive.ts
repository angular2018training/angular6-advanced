import { MyModalComponent } from './../my-modal/my-modal.component';
import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input,
  OnInit,
  OnDestroy
} from '@angular/core';
import { ModalService } from '../services/modal.service';

@Directive({
  selector: '[auModalOpenOnClick]'
})
export class ModalOpenOnClickDirective implements OnInit, OnDestroy {
  elements: HTMLBaseElement[];
  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef,
    private _modalService: ModalService
  ) {}

  ngOnInit(): void {
    this._modalService.close$.subscribe(() => {
      this._viewContainerRef.clear();
    });
  }

  @Input()
  set auModalOpenOnClick(els: any) {
    if (els.length) {
      this.elements = els;
    } else {
      this.elements = [els];
    }
    this.elements.forEach(el => {
      el.addEventListener('click', this.clickHandler);
    });
  }

  clickHandler = (() => {
    this._viewContainerRef.clear();
    this._viewContainerRef.createEmbeddedView(this._templateRef);
  }).bind(this);

  ngOnDestroy() {
    this.elements.forEach(el =>
      el.removeEventListener('click', this.clickHandler)
    );
  }
}
