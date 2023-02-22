import { Component, OnInit } from '@angular/core';

import { StockService } from '../stock.service';
import { Stock } from '../stock';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  stocks: Stock[] = [];

  // constructor() { }
  constructor(public stockService: StockService) { }

  ngOnInit(): void {
    this.stockService.getAll().subscribe((data: Stock[])=>{
      this.stocks = data;
      console.log(this.stocks);
    })
  }

  deleteStock(id: number){
    this.stockService.delete(id).subscribe(res => {
         this.stocks = this.stocks.filter(item => item.id !== id);
         console.log('Stocks deleted successfully!');
    })
  }

}
