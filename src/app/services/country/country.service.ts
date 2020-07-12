import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getAllCountries():Observable<any>{
    return this.http.get<any>('https://restcountries.eu/rest/v2/all')
    .pipe(
      tap((data) => console.log('success')),
      catchError(this.handleError<any>('error'))
    );
  }

  getCountryData(countryName):Observable<any>{
    return this.http.get<any>('https://restcountries.eu/rest/v2/name/' + countryName +'?fullText=true')
    .pipe(
      tap((data) => console.log('success')),
      catchError(this.handleError<any>('error'))
    );
  }

  getCountryName(countryCodes):Observable<any>{
    return this.http.get<any>('https://restcountries.eu/rest/v2/alpha?codes=' + countryCodes)
    .pipe(
      tap((data) =>{
        console.log('success')
      }),
      catchError(this.handleError<any>('error'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
