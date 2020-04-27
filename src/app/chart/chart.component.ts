import {Component, OnInit} from '@angular/core';
import {CategoryEnum} from '../_shared/category.enum';
import {Category} from '../_shared/category';
import {CategoryService} from '../_shared/category.service';
import {CategoryResponse} from "../_shared/category-response";


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public categories: Category[];
  public data: any;
  public sums: number[]

  constructor(private categoryService: CategoryService) {
    this.getCategories();
  }

  ngOnInit() {
  }

  private getCategories() {
    this.categoryService.getAllCategories().subscribe((response: CategoryResponse) => {
      this.categories = response.categories;
      this.getMoney(response.categories)
      this.prepareData()
    });

  }

  private prepareData() {
    this.data = {
      labels: Object.keys(CategoryEnum),
      datasets: [
        {
          data: this.sums,
          backgroundColor: [
            '#003f5c',
            '#374c80',
            '#7a5195',
            '#bc5090',
            '#ef5675',
            '#ff764a',
            '#a4a4a5'
          ],
          hoverBackgroundColor: [
            '#003f5c',
            '#374c80',
            '#7a5195',
            '#bc5090',
            '#ef5675',
            '#ff764a',
            '#a4a4a5'
          ]
        }]
    };
  }

  private getMoney(response: Category[]) {
    this.sums = []
    for (const category of response) {
      this.sums.push(category.sumOfMoney)
    }
  }
}
