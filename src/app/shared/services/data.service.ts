import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'

@Injectable()
export class DataService{
    protected api_url: string = environment.api_url;

    constructor(private http: HttpClient) { }

    public Get(url: string, optionsHeader?: HttpHeaders) : Observable<any> {
        return this.http.get(this.api_url + url, {headers: optionsHeader});
    }

    public GetById(url: string, id: any, optionsHeader?: HttpHeaders) : Observable<any>{
        return this.http.get(this.api_url + url + "/" + id, {headers: optionsHeader});
    }

    public Post(url: string, data: any, optionHeaders?: HttpHeaders) : Observable<any>{
        return this.http.post(this.api_url + url, data, {headers: optionHeaders});
    }
    
    public Put(url: string, data: any, optionHeaders?: HttpHeaders) : Observable<any>{
        return this.http.put(this.api_url + url, data, {headers: optionHeaders});
    }

    public Delete(url: string, id: any, optionHeaders?: HttpHeaders) : Observable<any>{
        return this.http.delete(this.api_url + url + "/" + id, {headers: optionHeaders});
    }
}