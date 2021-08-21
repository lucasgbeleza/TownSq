import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private httpClient: HttpClient) { }

  jsonDataUrl = 'http://jsonplaceholder.typicode.com';
  postsUrl = '/posts';
  usersUrl = '/users';
  

  getPostsData() {
   return this.httpClient.get(this.jsonDataUrl+this.postsUrl);
  }

  getUsersData(){
    return this.httpClient.get(this.jsonDataUrl+this.usersUrl);
  }
}
