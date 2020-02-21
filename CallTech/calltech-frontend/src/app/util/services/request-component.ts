import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  uri = environment.base_url;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  get<T>(apiUrl: string) {
    return this.http.get<T>(this.uri + apiUrl);
  }
  post(url: string , model) {
    const link = this.uri +url;
    console.log(model);
    this.http.post(link, model).subscribe(res => console.log(model)
    );
  }
}
