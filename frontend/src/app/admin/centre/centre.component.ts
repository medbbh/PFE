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

  centres:any;

  ngOnInit(): void {
    this.showCentres();
  }

  showCentres(){
    this.centres = this.centreservice.listCentre().subscribe(centre=>{
      this.centres=centre;
      // console.log(this.centres);
    });
  }

  deleteCentre(id:any){
    this.centreservice.deleteCentre(id).subscribe(
      res =>{
        this.centres = this.centres.filter((a:any) => a.id == id);
      }
    );
    this.router.navigateByUrl('/admin/centre')
  }
}
