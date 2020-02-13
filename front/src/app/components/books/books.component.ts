import { Component, OnInit, ViewChild} from '@angular/core';
import { BookService } from '../../services/book.service';
import { NgForm } from '@angular/forms';
import { Book } from '../../models/book';
import { MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';

@Component({ 
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BookService]
})

//weeeena 

//locoooo 

//aads


//asdads

export class BooksComponent implements OnInit {
  displayedColumns: string[] = ['position','name', 'author', 'year', 'action'];
  dataSource = new MatTableDataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(private bookService: BookService, private snackBar: MatSnackBar) { } 
  
  ngOnInit() { 
    this.getBooks();
    this.dataSource.paginator = this.paginator;
  }
  getBooks(){
    this.bookService.getBooks()
    .subscribe(res => {
      this.bookService.books = res as Book[];
    });
  }
  addBook(form: NgForm){
    this.bookService.addBook(form.value)
    .subscribe(res => {
      this.resetForm(form);
      this.getBooks();
    });
    console.log(form.value);
  }
  deleteBook(id: number){
    console.log(id);
    if(confirm('¿Are you sure?')){
      this.bookService.deleteBook(id).
      subscribe(res => {
        this.getBooks();
      });
    }
  }
  resetForm(form? : NgForm){
    if(form){
      form.reset();
    }
  }
  openSnackBar(message, action){
    this.snackBar.open(message, action, {duration : 3000});
  }
}
