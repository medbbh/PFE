import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/service/stock.service';
import { Stock } from 'src/app/user/stock';

@Component({
  selector: 'app-mvmt-stock',
  templateUrl: './mvmt-stock.component.html',
  styleUrls: ['./mvmt-stock.component.css']
})
export class MvmtStockComponent implements OnInit {

  stock: Stock[] = [];
  counts:any = {}
  lieu:any[] =[]
  constructor(private stockService :StockService) { }

  ngOnInit(): void {
    this.stockService.getAll().subscribe((data: Stock[])=>{
      this.stock = data;


      for (let i = 0; i < this.stock.length; i++) {
        for (let j = i + 1; j < this.stock.length; j++) {
          if (this.stock[i].lieu === this.stock[j].lieu && this.stock[i].nomvaccin === this.stock[j].nomvaccin) {
            this.stock[i].quantite += this.stock[j].quantite
            // this.lieu.push(this.stock[i].lieu)
            this.stock.splice(j, 1)
          }
        }
      }
      console.log(this.stock)

    })
  }

}
