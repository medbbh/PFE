import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { map } from 'rxjs';
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


  constructor(private personvaccineeservice: PersonneVaccineeService) { }

  ngOnInit(): void {
    this.personvaccineeservice.getPerson().subscribe(data => {
      this.person = data;

      for (const num of this.person) {
        this.counts[num.age] = this.counts[num.age] ? this.counts[num.age] + 1 : 1;
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
            label: 'Diagramme d\'age',
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
      },
    });
  }
}
