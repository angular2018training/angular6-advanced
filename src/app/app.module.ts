import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuFaInputComponent } from './lib/au-fa-input/au-fa-input.component';
import { InputRefDirective } from './lib/common/input-ref.directive';
import { CustomAttrDirectiveComponent } from './components/custom-attr-directive/custom-attr-directive.component';
import { CustomStructuralDirectiveComponent } from './components/custom-structural-directive/custom-structural-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    AuFaInputComponent,
    InputRefDirective,
    CustomAttrDirectiveComponent,
    CustomStructuralDirectiveComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
