
import { Injectable } from '@angular/core';
import{Observable}  from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {MemeClass} from './Mem';
@Injectable({
  providedIn: 'root'
})
export class MemeService {
private _url="https://meme-api.herokuapp.com/gimme";
  constructor(private _http:HttpClient) { }
  getMeme():Observable<MemeClass>{
return this._http.get<MemeClass>(this._url);
  }
  

}
