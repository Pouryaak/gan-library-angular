import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient, @Inject("API_URL") private apiUrl: string) { }

  getBooks(searchTerm: string): Observable<Book[]> {
    return this.http.get<{ items: Book[]; totalItems: number }>(`${this.apiUrl}?q=${searchTerm}&maxResults=12`).pipe(
      map(books => {
        if (books.totalItems > 0) {
          return books.items.map((item: any) => ({
            id: item.id,
            title: item.volumeInfo.title,
            author: (item.volumeInfo.authors && (item.volumeInfo.authors[0] || "Unknown Author")) ?? "Unknown Author",
            rating: item.volumeInfo.averageRating || "No Rating",
            pages: item.volumeInfo.pageCount || "Unknown Pages",
            description: item.volumeInfo.description,
            publishedDate: item.volumeInfo.publishedDate ?? "Unknown Date",
            coverImage: (item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail) ?? undefined,
          })
          )
        } else {
          return [];
        }
      }),
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    );
  }

}
