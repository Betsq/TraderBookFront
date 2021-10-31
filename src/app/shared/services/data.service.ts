import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'

@Injectable()
export class DataService{
    private api_url: string = environment.api_url;

    protected constructor(protected http: HttpClient) { }

    protected Get(url: string, optionsHeader?: HttpHeaders) : Observable<any> {
        return this.http.get(this.api_url + url, {headers: optionsHeader});
    }

    protected GetById(url: string, id: any, optionsHeader?: HttpHeaders) : Observable<any>{
        return this.http.get(this.api_url + url + "/" + id, {headers: optionsHeader});
    }

    protected Post(url: string, data: any, optionHeaders?: HttpHeaders) : Observable<any>{
        return this.http.post(this.api_url + url, data, {headers: optionHeaders});
    }
    
    protected Put(url: string, data: any, optionHeaders?: HttpHeaders) : Observable<any>{
        return this.http.put(this.api_url + url, data, {headers: optionHeaders});
    }

    protected Delete(url: string, id: any, optionHeaders?: HttpHeaders) : Observable<any>{
        return this.http.delete(this.api_url + url + "/" + id, {headers: optionHeaders});
    }
}