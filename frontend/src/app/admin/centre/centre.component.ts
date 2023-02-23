import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CentreService } from '../../service/centre.service';

@Component({
  selector: 'app-centres',
  templateUrl: './centre.component.html',
  styleUrls: ['./centre.component.scss']
})
export class CentresComponent implements OnInit{

  constructor(private centreservice:CentreService ,private router:Router){}
  
  index = 0

  centres:any;

  ngOnInit(): void {
    this.showCentres();
  }

  showCentres(){
    this.centres = this.centreservice.listCentre().subscribe(centre=>{
      this.centres=centre;
    });
  }

  deleteCentre(id:any){
    this.centreservice.deleteCentre(id).subscribe(
      res =>{
        this.showCentres()
      }
    );
  }
}
