import { ModalService } from './components/custom-modal/services/modal.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuFaInputComponent } from './lib/au-fa-input/au-fa-input.component';
import { InputRefDirective } from './lib/common/input-ref.directive';
import { CustomAttrDirectiveComponent } from './components/custom-attr-directive/custom-attr-directive.component';
import { CustomStructuralDirectiveComponent } from './components/custom-structural-directive/custom-structural-directive.component';
import { TabPanelComponent } from './components/custom-structural-directive/tab-panel/tab-panel.component';
import { TabComponent } from './components/custom-structural-directive/tab/tab.component';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { MyModalComponent } from './components/custom-modal/my-modal/my-modal.component';
import { ModalOpenOnClickDirective } from './components/custom-modal/directives/modal-open-on-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    AuFaInputComponent,
    InputRefDirective,
    CustomAttrDirectiveComponent,
    CustomStructuralDirectiveComponent,
    TabPanelComponent,
    TabComponent,
    CustomModalComponent,
    MyModalComponent,
    ModalOpenOnClickDirective
  ],
  imports: [BrowserModule],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
