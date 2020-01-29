import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  selectedBook : Book;
  books: Book[];
  readonly URL_API = 'http://localhost:3000'; 
  
  constructor(private http: HttpClient) { 
    this.selectedBook = new Book();
  }

  getBooks() {
    return this.http.get(this.URL_API);    
  }
  addBook(Book: Book) {
    return this.http.post(this.URL_API, Book);
  }
  deleteBook(id: number){
    return this.http.delete(this.URL_API+`/${id}`);
  }

}