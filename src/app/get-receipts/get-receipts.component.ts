import {Component, OnInit} from '@angular/core';
import {Receipt} from '../_shared/receipt';
import {ReceiptService} from '../_shared/receipt.service';
import {Picture} from '../_shared/picture.enum';

@Component({
  selector: 'app-get-receipts',
  templateUrl: './get-receipts.component.html',
  styleUrls: ['./get-receipts.component.scss']
})
export class GetReceiptsComponent implements OnInit {

  receipts: Receipt[];


  constructor(private receiptService: ReceiptService) {
  }

  ngOnInit() {
    this.receiptService.getAllReceipts().subscribe((response: Receipt[]) => {
      this.receipts = response;
      this.makeAllVisible();
    });
  }

  getImage(category: string) {
    return Picture[category];
  }

  hide(receipt: Receipt) {
    receipt.visibility = false;

  }


  makeAllVisible() {
    for (const receipt of this.receipts) {
      receipt.visibility = true;
    }
  }

  getSum() {
    let sum = 0;
    for (const receipt of this.receipts) {
      if (receipt.visibility === true) {
        sum += receipt.money;
      }
    }
    return sum;
  }

}
