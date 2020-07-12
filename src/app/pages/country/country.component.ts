import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {CountryService} from '../../services/country/country.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countryName :string;
  countryData: any =[];
  borderNames: any =[];
  constructor(public route: ActivatedRoute, private router: Router, public countryService: CountryService, public location: Location) { }

  ngOnInit() {
    this.countryName = this.route.snapshot.paramMap.get("country_name");
    this.getCountryData(this.countryName)
  }
  getCountryData = (name) =>{
    this.countryService.getCountryData(name).subscribe(res =>{
      this.countryData = res[0];
      let border_codes = this.countryData.borders;
      border_codes = border_codes.join(";");
      if(border_codes){
        this.getBorderNames(border_codes);
      }
    })
  }

  getBorderNames = (codes) => {
    this.countryService.getCountryName(codes).subscribe(res =>{
      if(res){
        this.borderNames = res.map((borderNames) =>{
          return borderNames.name
        })
      }
    })
  }

  backToHome = () =>{
    this.location.back();
  }
}
