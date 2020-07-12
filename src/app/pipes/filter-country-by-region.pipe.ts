import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';
export interface filterInput{
  region: string,
  searchInput?: string
}

@Pipe({
  name: 'filterCountryByRegion'
})
export class FilterCountryByRegionPipe implements PipeTransform {
  result : any;
  transform(countryList: any, filterInput): any {
    // this.compareSearchInput(filterInput.searchInput)

    if (!filterInput.searchInput && filterInput.region == 'all') {
      this.result = countryList;
      return this.result;
    };
    this.result =  countryList.filter(country =>{
      if(country.region == filterInput.region){
        if(filterInput.searchInput != null){
          return String(country.name).toLowerCase().includes(filterInput.searchInput.toLowerCase());
        }
        return country;
      }
    })

    return this.result;
  }
}
