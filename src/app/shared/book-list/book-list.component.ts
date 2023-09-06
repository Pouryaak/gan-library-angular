import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/common/interfaces/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() books: Book[] = [];
  @Input() title: string = "List of Books";


  constructor() { }

  ngOnInit(): void {
  }
}
