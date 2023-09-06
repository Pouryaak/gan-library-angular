import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';
import { Book } from 'src/app/common/interfaces/book';
import { BooksService } from 'src/app/common/services/books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  searchForm!: FormGroup;
  isLoading: boolean = false;
  showResults: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private booksService: BooksService) {

  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      searchTerm: new FormControl('')
    });
    this.setSearchInitialValue();
    this.cleanUrl();

  }

  onSearch() {
    const searchTermValue = this.searchForm.get('searchTerm')!.value;
    if (searchTermValue) {
      this.showResults = true;
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: { q: searchTermValue },
        queryParamsHandling: 'merge',
      });
      this.fetchBooks(searchTermValue);
    }
  }

  private fetchBooks(query: string) {
    this.isLoading = true;
    this.booksService.getBooks(query).pipe(
      takeUntil(this.destroy$),
      tap(() => this.isLoading = false)
    ).subscribe(data => this.books = data);
  }

  setSearchInitialValue() {
    this.activatedRoute.queryParams.subscribe(params => {
      const searchTermFromUrl = params["q"];
      if (searchTermFromUrl) {
        this.searchForm.controls["searchTerm"].setValue(searchTermFromUrl);
        this.showResults = true;
        this.fetchBooks(searchTermFromUrl)
      }
    })
  }

  cleanUrl() {
    this.searchForm.get('searchTerm')!.valueChanges.subscribe(searchTermValue => {
      if (!searchTermValue) {
        this.showResults = false;
        this.router.navigate([], {
          relativeTo: this.activatedRoute,
          queryParams: { q: null },
          queryParamsHandling: "merge"
        });
      }
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
