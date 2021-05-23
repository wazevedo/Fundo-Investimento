import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(ptBr);

import { AppRoutingModule } from './app-routing.module';
import { ResgateComponent } from './resgate/resgate.component';
import { AppComponent } from './app.component';

import { Service } from './service/service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InvestimentosComponent } from './investimentos/investimentos.component';
import { FormsModule} from '@angular/forms';
import { ModalComponentSucesso } from './modal/modal.component';
import { ModalComponentErro } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ResgateComponent,
    InvestimentosComponent,
    ModalComponentSucesso,
    ModalComponentErro,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
