import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Freelancer } from '../models/freelancer';

type dataResponse={
  columns:string[],
  data:Freelancer[]
}

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  constructor(private _http:HttpClient) { }

  // freelancerObs$!:Observable<Freelancer[]>;

  private _baseUrl="http://localhost:8081/freelancer/";

  getFreelacners=():Observable<dataResponse>=>{
    return this._http.get<Freelancer[]>(this._baseUrl.concat("all")).pipe(
      map((response)=>{
        return {
          columns:Object.keys(response[0]),
          data:response
        }
      })
    );
    // return this._http.get<Freelancer[]>(this._baseUrl.concat("all"));
  }

//   map((response) => {
//     return {
//         columns: Object.keys(response[0]),
//         data: response
//     }
// })

  getById=(id:string):Observable<Freelancer>=>{
    let url=this._baseUrl+id;
    return this._http.get<Freelancer>(url);
  }

  saveFreelancer=(freelacner:Freelancer):Observable<Freelancer>=>{
    console.log("service");
    console.log(freelacner);
    return this._http.post<Freelancer>(this._baseUrl,freelacner);
  }

  updateFreelancer=(freelancer:Freelancer):Observable<Freelancer>=>{
    return this._http.put<Freelancer>(this._baseUrl,freelancer);
  }

  deleteFreelancer=(freelancerId:string):Observable<Freelancer>=>{

    return this._http.delete<Freelancer>(this._baseUrl);
  }

  getFreelancerPage=(records:number,pageIndex:number):Observable<Freelancer[]>=>{
    return this._http.get<Freelancer[]>(this._baseUrl.concat("rows/true/")+pageIndex+("/")+records);
  }
}
