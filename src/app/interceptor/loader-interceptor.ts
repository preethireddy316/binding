import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpEventType,
  } from '@angular/common/http';
  
  import { Observable, tap } from 'rxjs';
import { DesignUtility } from '../service/designUtility.service';
  
  @Injectable()
export class LoaderInterceptor implements HttpInterceptor{
constructor(private du:DesignUtility){

}
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event:any)=>{

        this.du.loader.next(true);
        if(event.type==HttpEventType.Response){
          if(event.status==200){
            this.du.loader.next(false)
          }
        }
      }
      )

    )
}
}




