import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  restaurants: Object

  url = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search'

  constructor(private http: HttpClient, ) { }


  search(paramsModel): Observable<any> {
    let location = paramsModel.city + paramsModel.state
    let params = new HttpParams()
    params = params.append('location', location)
    params = params.append('price', paramsModel.price)
    return this.http.get(this.url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer jNQNzd888yjAjrBfSv5deMQAuZ-CHG3xQg_xCRrtmw4l_eTmif8GHvWF6kRZqkLonv4K0myOcUEx9oX3Y6KE_Vo3qk2pxoUah2WJeUwUc0loSzXs2ba68qxzsNUbXHYx'
      }),
      params: params
    })
      .pipe()
  }


}
