import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './category';
import {environment} from '../../environments/environment';
import {CategoryResponse} from "./category-response";

enum ENDPOINTS {
  CATEGORIES = 'categories'
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  public getAllCategories(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(environment.api.url + ENDPOINTS.CATEGORIES);
  }
}
