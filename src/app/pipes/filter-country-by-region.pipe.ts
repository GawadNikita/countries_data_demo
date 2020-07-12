import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';
import { count } from 'console';
export interface filterInput{
  region: string,
  searchInput?: string
}

@Pipe({
  name: 'filterCountryByRegion'
})
export class FilterCountryByRegionPipe implements PipeTransform {
  result: any =[];
  transform(countryList: any, filterInput): any {
    this.result=countryList;
    if (!filterInput.searchInput && filterInput.region == 'all') {
      return this.result;
    }
    
    this.result =  countryList.filter(country =>{
      if(country.region == filterInput.region){
        if(filterInput.searchInput != null){
          return String(country.name).toLowerCase().includes(filterInput.searchInput.toLowerCase());
        }
        return country;
      }
    })

    if(filterInput.searchInput != null){
      console.log("here" + this.result.length)
      this.result =  countryList.filter(country => {
        return String(country.name).toLowerCase().includes(filterInput.searchInput.toLowerCase());
      }).filter((country) =>{
        if(filterInput.region == "all"){ return country; }
        return (filterInput.region == country.region)
      });
    }

    return this.result;
  }
}
