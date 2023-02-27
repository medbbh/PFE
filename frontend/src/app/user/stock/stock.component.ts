import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/service/stock.service';
import { Stock } from '../stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

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
