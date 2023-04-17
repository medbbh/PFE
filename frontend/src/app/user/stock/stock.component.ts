import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/service/stock.service';
import { Stock } from '../stock';
import { NotificationService } from 'src/app/service/notification.service';
import { PersonneVaccineeService } from 'src/app/service/personne-vaccinee.service';
import { PersonVaccinee } from '../personne-vaccinee';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stocks: Stock[] = [];
  person:PersonVaccinee[] =[];
  id:any = 0
  searchText =''
  p: number = 1;

  constructor(public stockService: StockService,public notificationService : NotificationService,notifierService: NotificationService ,private personvaccineeService:PersonneVaccineeService) {}

  ngOnInit(): void {

    this.stockService.getAll().subscribe((data: Stock[])=>{
      this.stocks = data;
      for (let i=0; i<this.stocks.length;i++){
        for(let j=i+1; j<this.stocks.length;j++){
          if (this.stocks[i].nomvaccin === this.stocks[j].nomvaccin && this.stocks[i].lieu === this.stocks[j].lieu) {
            this.stocks[i].quantite = Number(this.stocks[i].quantite) + Number(this.stocks[j].quantite)
            this.stocks.splice(j, 1)
          }
        }
      }
    })
}

  deleteStock(id: number){
    this.stockService.delete(id).subscribe(res => {
         this.stocks = this.stocks.filter(item => item.id !== id);
         console.log('Stocks deleted successfully!');
    })
  }

}
