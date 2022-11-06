import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormToEmailService {

    constructor(private http: HttpClient) { }

    public submitForm(formValue: any): Observable<any>{
        return this.http.post('https://mailthis.to/JBO', formValue, { responseType: 'text' });
    }
}
