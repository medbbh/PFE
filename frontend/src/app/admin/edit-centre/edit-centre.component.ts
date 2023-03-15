import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Route, Router} from '@angular/router';
import { CentreService } from '../../service/centre.service';

import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-edit-centre',
  templateUrl: './edit-centre.component.html',
  styleUrls: ['./edit-centre.component.scss']
})
export class EditCentreComponent implements OnInit{
  // font awesome icons
  faArrowLeft = faArrowLeft
// end
  centreId:any;
  centre:any;


  constructor(private route:ActivatedRoute ,private router:Router ,private centreservice:CentreService){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.centreId = Number(routeParams.get('centreId'));
    // console.log(this.centreId);

    this.centreservice.find(this.centreId).subscribe((data:any)=>{
      this.centre=data;
      // console.log(this.centre);
    })
  };

  update(nom:string ,wilayaa:string,mougataa:string, type:string){
    this.centreservice.update(this.centreId, this.centre).subscribe(
      res=>{
            this.router.navigate(['/admin/centre']);
    });
  }
}
