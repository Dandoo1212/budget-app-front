import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Check your receipts',
        icon: 'pi pi-list'
      },
      {
        label: 'Add Receipt',
        icon: 'pi pi-money-bill'
      },
      {
        label: 'Show diagram',
        icon: 'pi pi-info'
      }
    ];
  }


}
