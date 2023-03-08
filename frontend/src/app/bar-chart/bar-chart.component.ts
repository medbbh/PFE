import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { PersonneVaccineeService } from '../service/personne-vaccinee.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  @ViewChild('barCanvas') barCanvas: ElementRef | undefined;
  barChart: any;

  person: any;
  age: any[]=[];



  constructor(private personvaccineeservice :PersonneVaccineeService) {}

  ngOnInit(): void {
    this.personvaccineeservice.getPerson().subscribe(data =>{
      this.person = data;
      if(this.person != null){
        for(const item of this.person){
          if(!this.age.includes(item.age)){
            this.age.push(item.age);
          }
        }
      }
      console.log(this.age)
      this.barChartMethod(this.age);
    })
    
   
  }

  barChartMethod( age:any) {
    this.barChart = new Chart(this.barCanvas?.nativeElement, {
      type: 'bar',
      data: {
        labels:age,
        datasets: [
          {
            label: '# of Votes',
            data: [5,10,15,20,25,30],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 200, 192, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
             
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              
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