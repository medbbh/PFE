import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PersonneVaccineeService } from 'src/app/service/personne-vaccinee.service';
import Chart from 'chart.js/auto';
import { wilayaas, rim } from 'src/app/cartographie';

@Component({
  selector: 'app-cartographie',
  templateUrl: './cartographie.component.html',
  styleUrls: ['./cartographie.component.css']
})
export class CartographieComponent implements OnInit {
  @ViewChild('barCanvas') barCanvas: ElementRef | undefined;

  persons: any
  counts :any = {}
  wilayaa:any
  index = 0
  barChart: any;
  carto :any[] = []
  keys:any[] = []
  values:any[] = []
  tableData:any
  wilayaas:any
  mougataas:any
  long:any
  rim:any

  allData:any = {}
  dataKey:any[] = []
  dataValue:any[] = []

  constructor(private personvaccineeService: PersonneVaccineeService) { }

  ngOnInit(): void {

    this.rim = rim

    this.personvaccineeService.getPerson().subscribe((data) => {
      this.persons = data;
      this.tableData = data

      for (const num of this.persons) {
        this.counts[num.lieu] = this.counts[num.lieu] ? this.counts[num.lieu] + 1 : 1;
      }

      // all data

      for(const item of this.tableData){
      let mougataa = item.lieu.split('--').pop()

      this.allData[mougataa] = this.allData[mougataa] ? this.allData[mougataa] + 1 : 1;
      }
      this.dataKey = Object.keys(this.allData)
      this.dataValue = Object.values(this.allData);

      // console.log(this.allData)





      // bar chart data


      this.keys = Object.keys(this.counts)
      this.values = Object.values(this.counts);


    for(let i=0;i<this.keys.length;i++)
    {
      this.keys[i] = this.keys[i].substring(this.keys[i].indexOf("--") + 2,this.keys[i].lastIndexOf("--"))
    }

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
            label: 'Wilayaa',
            data: counts,
            backgroundColor: [

              '#2ECC71',
              '#6F42C1',
              '#DC3545',
              '#FD7E14',
              '#0DCAF0'

            ],

            borderColor: [
              'white',

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
