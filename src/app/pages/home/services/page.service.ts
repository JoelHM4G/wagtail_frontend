import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../interfaces/page.interface';

@Injectable({
	providedIn: 'root'
})
export class PageService {
	private apiUrl = 'http://localhost:8000/api/v2/pages/4/?fields=_,title,intro,body';
	constructor(private http: HttpClient) {}
	getPages(): Observable<any> {
		return this.http.get<Page>(this.apiUrl);
	}
}
