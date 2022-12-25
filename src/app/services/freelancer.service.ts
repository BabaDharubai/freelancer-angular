import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Freelancer } from '../models/freelancer';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  constructor(private _http:HttpClient) { }

  // freelancerObs$!:Observable<Freelancer[]>;

  private _baseUrl="http://localhost:8081/freelancer/";

  getFreelacners=():Observable<Freelancer[]>=>{
    return this._http.get<Freelancer[]>(this._baseUrl.concat("all"));
  }

  getById=(id:number):Observable<Freelancer>=>{
    let url=this._baseUrl+id;
    return this._http.get<Freelancer>(url);
  }

  saveFreelancer=(freelacner:Freelancer):Observable<Freelancer>=>{
    return this._http.post<Freelancer>(this._baseUrl,freelacner);
  }

  updateFreelancer=(freelancer:Freelancer):Observable<Freelancer>=>{
    return this._http.put<Freelancer>(this._baseUrl,freelancer);
  }

  deleteFreelancer=(freelancer:Freelancer):Observable<Freelancer>=>{

    return this._http.delete<Freelancer>(this._baseUrl);
  }
}
