import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomComponent } from './custom.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CustomComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
