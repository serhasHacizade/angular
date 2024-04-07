import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BaseService {

    err: any;

    public baseUrl = "http://localhost:3000";

    constructor(public http: HttpClient) { }
     
    postReq(url: any, data: any) {
        return this.http.post<any>(this.basUrlUpdate(url), data, {
            headers: new HttpHeaders({
                "Content-Type" : "application/json; charset = utf-8",
            }),
        });
    };
     
    getReq(url: any) {
        return this.http.get<any>(this.basUrlUpdate(url) + url, {
            headers: new HttpHeaders({
                "Content-Type" : "application/json; charset = utf-8",
            }),
        });
    };
     
    putReq(url: any, data: any) {
        return this.http.put<any>(this.basUrlUpdate(url), data, {
            headers: new HttpHeaders({
                "Content-Type" : "application/json; charset = utf-8",
            }),
        });
    };

    protected basUrlUpdate(url : string): string {   
        return (url.startsWith("/")) ? this.baseUrl + url : url;
    };



}
