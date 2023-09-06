import { Component, OnInit } from '@angular/core';
import { BooksService } from '../common/services/books.service';
import { Book } from '../common/interfaces/book';
import { Subject, catchError, map, of, takeUntil, tap } from 'rxjs';
import { getNewestBooks } from '../utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books$ = this.bookService.getBooks("compliance").pipe(
    map((books) => getNewestBooks(books)),
    catchError(error => {
      console.error("Error fetching books:", error);
      this.errorMessage = "An error occurred while fetching books.";
      return of([]);
    })
  );
  isLoading: boolean = false;
  errorMessage?: string;

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {

  }


}
