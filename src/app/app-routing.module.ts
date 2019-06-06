import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChartComponent} from './chart/chart.component';
import {PostReceiptComponent} from './post-receipt/post-receipt.component';
import {GetReceiptsComponent} from './get-receipts/get-receipts.component';

const routes: Routes = [
  {
    path: 'chart', component: ChartComponent
  },
  {
    path: 'post', component: PostReceiptComponent
  },
  {
    path: 'receipts', component: GetReceiptsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
