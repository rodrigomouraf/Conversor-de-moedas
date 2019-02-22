import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';

@NgModule({
  declarations: [ConversorComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ConversorModule
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaService,
    ConversorService    
  ]
})
export class ConversorModule { }
