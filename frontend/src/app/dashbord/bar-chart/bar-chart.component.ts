import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { PersonneVaccineeService } from 'src/app/service/personne-vaccinee.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  @ViewChild('barCanvas') barCanvas: ElementRef | undefined;

  barChart: any;

  person: any;
  counts: any = {};
  keys: any[] = []
  values: any[] = []
  realVal:any[] =[]
  token:any
  tokenData:any
  role:any
  constructor(private personvaccineeservice: PersonneVaccineeService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.tokenData = JSON.parse(atob(this.token.split('.')[1]))
    this.role = this.tokenData

    this.personvaccineeservice.getPerson().subscribe(data => {
      this.person = data;

      if(this.role.user_type == 1){
        for (const num of this.person) {

        this.counts[num.age] = this.counts[num.age] ? this.counts[num.age] + 1 : 1;
      }
      }else{
        for (const num of this.person) {
          num.lieu = num.lieu.substr(0, num.lieu.indexOf("--"))
          if(num.lieu == this.role.centre){
          this.counts[num.age] = this.counts[num.age] ? this.counts[num.age] + 1 : 1;
          }
        }
      }


      this.keys = Object.keys(this.counts)
      this.values = Object.values(this.counts)
      this.barChartMethod(this.keys, this.values);

    })

  }

  barChartMethod(age: any, counts: any) {
    this.barChart = new Chart(this.barCanvas?.nativeElement, {
      type: 'bar',
      data: {
        labels: age,
        datasets: [
          {
            label: 'Age',
            data: counts,
            backgroundColor: [
              // 'rgba(255, 100, 1, 1)',
              // 'rgba(100, 255, 0, 1)',
              // 'rgba(0, 100, 255, 1)',
              // 'rgba(100, 1, 255, 1)',
              '#2ECC71',
              '#DC3545',
              '#FD7E14',
              '#6F42C1',
              '#0DCAF0'

            ],
            borderColor: [
              'white',
              // 'rgba(54, 162, 235, 1)',
              // 'rgba(255, 206, 86, 1)',
              // 'rgba(75, 192, 192, 1)',

            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,

          },
        },
        indexAxis: 'y'
      },
    });
  }
}
