import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    setInterval(() => { this.dataService.sendsms().subscribe(data=>{
    }) },
    43200000 );

  }

  sendSms(){
    this.dataService.sendsms().subscribe(data=>{
      console.log("yes")
    })

  }
}
