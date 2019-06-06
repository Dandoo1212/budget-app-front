import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {ChartComponent} from './chart/chart.component';
import {PostReceiptComponent} from './post-receipt/post-receipt.component';
import {GetReceiptsComponent} from './get-receipts/get-receipts.component';
import {HttpClientModule} from '@angular/common/http';
import {CategoryKeyPipe} from './_shared/category-key.pipe';
import {ChartModule} from 'primeng/chart';
import {ReactiveFormsModule} from '@angular/forms';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    PostReceiptComponent,
    GetReceiptsComponent,
    CategoryKeyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    HttpClientModule,
    ChartModule,
    ReactiveFormsModule,
    DataViewModule,
    PanelModule,
    BrowserAnimationsModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
