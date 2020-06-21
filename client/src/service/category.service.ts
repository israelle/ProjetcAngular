import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Category} from '../app/model/Category';
import {HttpClient} from '@angular/common/http';
import {ApiRouter} from '../shared/api-routes/api-router.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient,
    private apiRouter: ApiRouter,
  ) { }

  save(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiRouter.generate('api_categories_post_collection'), category);
  }
}
