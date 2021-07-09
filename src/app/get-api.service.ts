import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from './classes/posts';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  public countries: any[];
  httpclient: any;
  constructor(private http:HttpClient, private http2:HttpClient) { }
  getcomments(): Observable<any> {

    return this.http.get("https://jsonplaceholder.typicode.com/posts/1/comments")
  }

  getcommentsbyparameter(): Observable<any>{
    let params1 = new HttpParams().set("userId","1");
    return this.http2.get("https://jsonplaceholder.typicode.com/posts?userId=1",{params:params1})
  }

  post(opost:Posts): Observable<any>{
    return this.http2.post("https://jsonplaceholder.typicode.com/posts",opost);
  }

  put(opost:Posts): Observable<any>{
    return this.http2.put("https://jsonplaceholder.typicode.com/posts/1",opost);
  }

  patch(opost:Posts): Observable<any>{
    return this.http2.put("https://jsonplaceholder.typicode.com/posts/1",opost);
  }

  delete(): Observable<any>{
    return this.http2.delete("https://jsonplaceholder.typicode.com/posts/1");
  }
  // apiCall(){
  //   return this.http.get("https://jsonplaceholder.typicode.com/todos/1")
  // }

  getcountrynews(): Observable<any>{
    return this.http2.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=6f1c37b27c1645cfbe386064f8809a14")
  }
}
