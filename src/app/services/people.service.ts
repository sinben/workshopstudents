import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Person } from '../models/person';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeopleService {

  private _url = `assets/mockData.json`;


  public list(): Observable<Person[]> {
    return this.http.get<Person[]>(this._url);
  }

  public get(id: number): Observable<Person> {
    return this.http.get<Person>(`${this._url}/${id}`);
  }

  public add(person: Person): Observable<Person> {
    return this.http.post<Person>(`${this._url}`, person);
  }

  public update(person: Person): Observable<Person> {
    return this.http.put<Person>(`${this._url}/${person.id}`, person);
  }

  public remove(person: Person): Observable<Person> {
    return this.http.delete<Person>(`${this._url}/${person.id}`);
  }

  //With query params
  public listWithParams(): Observable<Person[]> {
    const params = new HttpParams()
      .set('isStudent', 'yes');

    return this.http.get<Person[]>(this._url, {params});
  }

  constructor(private http: HttpClient) {
  }
}
