import {Component, OnInit} from '@angular/core';
import {CategoryEnum} from '../_shared/category.enum';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReceiptService} from '../_shared/receipt.service';
import {Receipt} from '../_shared/receipt';

@Component({
  selector: 'app-post-receipt',
  templateUrl: './post-receipt.component.html',
  styleUrls: ['./post-receipt.component.scss']
})
export class PostReceiptComponent implements OnInit {

  categories: string[] = Object.keys(CategoryEnum);
  receiptForm: FormGroup;
  receipt: Receipt;

  constructor(private formBuilder: FormBuilder, private receiptService: ReceiptService) {
  }

  ngOnInit() {
    this.receiptForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]+')])],
      money: [null, Validators.compose([Validators.required, Validators.pattern('^\\d*\\.?\\d*$')])],
      category: [null, Validators.required],
    });
  }

  public postReceipt() {
    this.createReceipt();
    this.receiptService.postReceipt(this.receipt).subscribe((response: Receipt) => {
    });
  }

  private createReceipt() {
    this.receipt = {
      name: this.receiptForm.value.name,
      money: this.receiptForm.value.money,
      category: this.receiptForm.value.category,
      visibility: true
    };
  }

}
