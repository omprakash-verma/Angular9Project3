import { Injectable, Inject } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
  
@Injectable()  
export class PageService {  
  
  public _baseUrl: string;  
  
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string)  
  {  
    this._baseUrl = baseUrl;  
  }  
  
  getPages() {  
    return this.http.get(this._baseUrl + 'api/pages');  
  }  
  
}  
