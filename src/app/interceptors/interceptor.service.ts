import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const header = new HttpHeaders({
      'x-token': 'ABCh4564564'
    })

    const reqClone = req.clone({
      headers: header
    })


    return next.handle( reqClone ).pipe(
      catchError( this.handleError )
    )

  }

  handleError( error: HttpErrorResponse ){
    console.warn( error );
    return throwError('Error Personalizado')
  }


}
