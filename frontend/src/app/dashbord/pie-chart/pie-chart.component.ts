import { StockService } from './../../service/stock.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto'
import { vaccinService } from './../../service/vaccin.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor(private vaccinService: vaccinService, private stockService: StockService) { }

  nomVaccin: any[] = []
  qt: any[] = []
  stock: any
  vaccin: any

  ngOnInit(): void {

    this.stockService.getStock().subscribe(data => {
      this.stock = data
      if (this.stock != null) {

        for (let i = 0; i < this.stock.length; i++) {
          for (let j = i + 1; j < this.stock.length; j++) {
            if (this.stock[i].nomvaccin === this.stock[j].nomvaccin) {
              this.stock[i].quantite += this.stock[j].quantite
              this.stock.splice(j, 1)
            }
          }
        }

        for (const item of this.stock) {
          this.qt.push(item.quantite)
          this.nomVaccin.push(item.nomvaccin)
        }
        // console.log(this.nomVaccin)
        // console.log(this.qt)


        this.pieChartBrowser(this.nomVaccin, this.qt)

      }

    });
    // ngAfterViewInit(): void { }
  }

  canvas: any;
  ctx: any;

  @ViewChild('pieCanvas') pieCanvas!: { nativeElement: any };


  pieChart: any;

  pieChartBrowser(nomVaccin: any, qt: any): void {
    this.canvas = this.pieCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    this.pieChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: nomVaccin,
        datasets: [
          {
            backgroundColor: [
              '#2ecc71',
              '#95a5a6',
              '#9b59b6',
              '#f1c40f',
              '#e74c3c',
            ],

            data: qt,
          },
        ],
      },
    });
  }


}
