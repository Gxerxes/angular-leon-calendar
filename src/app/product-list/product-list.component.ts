import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = products;
  public myAll = true;
  public monthWeek = false;

  share() {
    window.alert('The product has been shared!');
  }

  myAllChange(e: any): void {
    this.myAll = e.currentTarget.checked;
  }

  monthWeekChange(e: any): void {
    this.monthWeek = e.currentTarget.checked;
  }

  ngOnInit() {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
