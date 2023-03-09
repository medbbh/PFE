import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { PersonneVaccineeService } from '../../service/personne-vaccinee.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  @ViewChild('barCanvas') barCanvas: ElementRef | undefined;
  barChart: any;

  constructor(private personvaccineeservice :PersonneVaccineeService) {}
  ngOnInit(){
    
  }
  
}