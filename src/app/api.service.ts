import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IApiData} from "./char";

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private readonly api_url: string = '/api/temperature';

  constructor(private http: HttpClient) { }

  public getData(): Observable<IApiData> {
    return this.http.get<IApiData>(this.api_url);
  }
}
