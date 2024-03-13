import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile';

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}contacts`);
  }


  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.apiUrl}contacts`, contact);
  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.apiUrl}contacts/${contact.id}`, contact);
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}contacts/${id}`);
  }

}
