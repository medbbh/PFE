import { Component, OnInit } from '@angular/core';
import { PersonneVaccineeService } from 'src/app/service/personne-vaccinee.service';
import { StockService } from 'src/app/service/stock.service';
import { PersonVaccinee } from 'src/app/user/personne-vaccinee';

@Component({
  selector: 'app-mvmt-stock',
  templateUrl: './mvmt-stock.component.html',
  styleUrls: ['./mvmt-stock.component.css']
})
export class MvmtStockComponent implements OnInit {

  stock: any;
  counts: any = {}
  lieu: any[] = []
  person: PersonVaccinee[] = [];
  nomvaccin: any[] = [];
  nb = 0;

  token: any
  tokenData: any
  role: any

  constructor(private stockService :StockService ,private personvaccineeService:PersonneVaccineeService) { }

  ngOnInit(): void {

    this.token = localStorage.getItem('token');
    this.tokenData = JSON.parse(atob(this.token.split('.')[1]))
    this.role = this.tokenData

    this.stockService.getStock().subscribe((data) => {

      this.stock = data;

      for (let i = 0; i < this.stock.length; i++) {
        for (let j = i + 1; j < this.stock.length; j++) {

          if (this.stock[i].lieu === this.stock[j].lieu && this.stock[i].nomvaccin === this.stock[j].nomvaccin) {
            this.stock[i].quantite += this.stock[j].quantite
            this.stock.splice(j, 1)

          }
        }
      }

      for (let i = 0; i < this.stock.length; i++) {
        this.stock[i].lieu = this.stock[i].lieu.substring(0, this.stock[i].lieu.indexOf("--"))
      }




      this.personvaccineeService.getAll().subscribe((data: PersonVaccinee[]) => {
        this.person = data
        for (let i = 0; i < this.stock.length; i++) {
          for (let k = 0; k < this.person.length; k++) {
            if (this.stock[i].nomvaccin === this.person[k].nomvaccin && this.stock[i].lieu === this.person[k].lieu) {
              this.stock[i].quantite -= 1
              this.nb = this.stock[i].quantite - (this.stock[i].quantite - 1)
            }
          }
        }
      })
    })
  }
}
