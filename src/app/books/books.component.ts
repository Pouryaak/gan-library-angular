import { Component } from '@angular/core';
import { Book } from '../common/interfaces/book';
import { BooksService } from '../common/services/books.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  books: Book[] = [];
  isLoading: boolean = false;
  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.bookService.getBooks("compliance").pipe(
      tap(() => this.isLoading = false)
    ).subscribe(data => this.books = data);
  }
}
