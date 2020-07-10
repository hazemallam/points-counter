import { Injectable } from '@angular/core';
import {Contact} from './../models/contact';
import { User} from './../models/user';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  APIURL = "http://localhost:5007/users/";
  token: string;
  constructor( private httpClient: HttpClient) { }

  contact(data){
    return this.httpClient.post<Contact>(this.APIURL+"contact", data).subscribe( response=> console.log(response))
  }
  signUp(data){
    return this.httpClient.post<{user:User, token:string}>(this.APIURL+"signup", data).subscribe(
      response =>{
        console.log(response.token)
        localStorage.setItem('token', response.token)
      }
    )
  }
  signIn(data){
    return this.httpClient.post<{user: User, token: string}>(this.APIURL+"login", data).subscribe(
      response =>{
        console.log(response)
        localStorage.setItem('token', response.token)
      }
    )
  }
  getToken(){
    let token = localStorage.getItem('token')
    return token
  }
  getAllDiscover(){
    return this.httpClient.get(this.APIURL+"discover")
    
  }
}
