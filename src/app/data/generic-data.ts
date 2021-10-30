import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class GenericData {

    private server: string = "http://localhost:3000";

    protected constructor(protected http: HttpClient) { }

    protected Get(url: string, optionsHeader?: HttpHeaders) : Observable<any> {
        return this.http.get(this.server + url, {headers: optionsHeader});
    }

    protected GetById(url: string, id: any, optionsHeader?: HttpHeaders) : Observable<any>{
        return this.http.get(this.server + url + "/" + id, {headers: optionsHeader});
    }

    protected Post(url: string, data: any, optionHeaders?: HttpHeaders) : Observable<any>{
        return this.http.post(this.server + url, data, {headers: optionHeaders});
    }
    
    protected Put(url: string, data: any, optionHeaders?: HttpHeaders) : Observable<any>{
        return this.http.put(this.server + url, data, {headers: optionHeaders});
    }

    protected Delete(url: string, id: any, optionHeaders?: HttpHeaders) : Observable<any>{
        return this.http.delete(this.server + url + "/" + id, {headers: optionHeaders});
    }
}