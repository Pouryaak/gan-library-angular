import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { BookCardComponent } from './book-card/book-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TruncatePipe } from '../common/pipes/truncate.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    BookListComponent,
    BookCardComponent,
    TruncatePipe,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    BookListComponent,
    TruncatePipe,
    LoaderComponent
  ]
})
export class SharedModule { }
