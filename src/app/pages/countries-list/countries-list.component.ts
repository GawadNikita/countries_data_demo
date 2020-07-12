import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../services/country/country.service';
import { FilterCountryByRegionPipe } from '../../pipes/filter-country-by-region.pipe';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  public countries: any;
  region_names: any;
  selectedRegion:string ='all';
  searchText:string = null;
  constructor(public countryService: CountryService) { }

  ngOnInit() {
    this.getAllCountries();
  }

  getAllCountries = () =>{
    this.countryService.getAllCountries().subscribe(res =>{
      this.countries = res;
      let regions = this.countries.map((country) =>{
        if(country.region != ''){
          return country.region;
        }
      })
      this.region_names = regions.filter((region, index) =>{
        return regions.indexOf(region) == index
      })
    })
  }

}
