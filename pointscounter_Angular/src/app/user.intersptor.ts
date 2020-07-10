import {HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MainServiceService} from 'src/app/services/main-service.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
   constructor(private service: MainServiceService){}
   intercept(req: HttpRequest<any>, next: HttpHandler){
       const AuthToken = this.service.getToken()
       const authRequest = req.clone({
           headers: req.headers.set('Authorization', 'Bearer '+AuthToken)
       })
       return next.handle(authRequest)
   }
    
}