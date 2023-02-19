import { Component, OnInit } from '@angular/core';
import { CentreService } from '../service/centre.service';

@Component({
  selector: 'app-new-centre',
  templateUrl: './new-centre.component.html',
  styleUrls: ['./new-centre.component.scss']
})
export class NewCentreComponent implements OnInit{

  constructor(private centreservice:CentreService){}

  centres:any;
 
  ngOnInit(): void {
    
  }

  add(nom:string ,localisation:string, type:string){
    this.centres={
      'nom' : nom,
      'localisation' : localisation,
      'type' : type,
    };
    this.centreservice.addCentre(this.centres as any).subscribe(centre=>{
      this.centres = centre;
    });
    console.log(this.centres);
  };

}
