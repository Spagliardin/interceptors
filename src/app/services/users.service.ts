import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  getUser(){
    let params = new HttpParams().append('page', '1')
    params = params.append('name', 'Nicolas Spagliardi')

    

    return this.http.get('https://reqres.in/api/user', {
      params,
    }).pipe(
      map( ( res: any ) => {
        return res.data;
      }),
      catchError( err => {
        return throwError('Error Personalizado')
      })
    )
  }

}
