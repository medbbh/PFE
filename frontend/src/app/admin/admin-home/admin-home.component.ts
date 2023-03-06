import { Component, OnInit ,ViewChild , ElementRef } from '@angular/core';
import jwt_decode from "jwt-decode";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  // icons
  faBars = faBars
  // end icons


  token:any;
  userData:any
  Router: any;
  email : any;
  id!:number
  constructor(private route : Router,) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.userData = jwt_decode(this.token)
    this.email = this.userData.user_email.substring(0,this.userData.user_email.indexOf("@"))
    this.id = this.userData.user_id


  }

  logout(){

    localStorage.removeItem('token');
    this.route.navigate(['/login'])

  }

  ngAfterViewInit(): void {
    this.pieChartBrowser();
    this.barChartMethod();
  }
  canvas: any;
  ctx: any;

  @ViewChild('pieCanvas') pieCanvas!: { nativeElement: any };
  @ViewChild('barCanvas') barCanvas: ElementRef | undefined;


  pieChart: any;
  barChart: any;


  pieChartBrowser(): void {
    this.canvas = this.pieCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    this.pieChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: ['Apple', 'Google', 'Facebook', 'Infosys', 'Hp', 'Accenture'],
        datasets: [
          {
            backgroundColor: [
              '#2ecc71',
              '#3498db',
              '#95a5a6',
              '#9b59b6',
              '#f1c40f',
              '#e74c3c',
            ],

            data: [12, 19, 3, 17, 28, 24],
          },
        ],
      },
    });
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas?.nativeElement, {
      type: 'bar',
      data: {
        labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
        datasets: [
          {
            label: '# of Votes',
            data: [200, 50, 30, 15, 20, 34],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
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
