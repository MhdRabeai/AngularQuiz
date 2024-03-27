import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/contact';
import { withCache } from '@ngneat/cashew';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get<User[]>('https://reqres.in/api/users?page={page}', {
      context: withCache(),
    });
  }

  fetchDate(id: number) {
    return this.http.get<User[]>(`https://reqres.in/api/users/${id}`, {
      context: withCache(),
    });
  }
}
