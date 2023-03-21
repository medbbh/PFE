import { rim, wilayaas } from 'src/app/cartographie';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CentreService } from '../../service/centre.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-new-centre',
  templateUrl: './new-centre.component.html',
  styleUrls: ['./new-centre.component.scss']
})
export class NewCentreComponent implements OnInit {
  // font awesome icons
  faArrowLeft = faArrowLeft
  // end
  constructor(private centreservice: CentreService,private router : Router) { }
  centres: any;

  ngOnInit(): void {

    // this.wilayaas = Object.keys(rim)
    // this.mougataas = Object.values(rim)

  }

  // men hown

  filteredStates:any[] = [];
  countries = wilayaas

  states:any = rim

  selectedCountry = '';
  selectedState = '';

  onCountrySelect(selectedCountry:any) {
    this.filteredStates = this.states.find((item: { country: any; }) => item.country === selectedCountry).stateList;
  }

  // yle hown_


  add(nom: string,wilayaa:string,mougataa:string, type: string) {
    this.centres = {
      'nom': nom,
      'wilayaa': wilayaa,
      'mougataa': mougataa,
      'type': type,
    };
    this.centreservice.addCentre(this.centres as any).subscribe(centre => {
      this.centres = centre;
      this.router.navigateByUrl('/admin/centre')
    });
    // console.log(this.centres);

  };

}
