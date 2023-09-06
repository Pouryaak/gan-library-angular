import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './common/pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    BrowserAnimationsModule,
    HttpClientModule


  ],
  providers: [
    { provide: "API_URL", useValue: "https://www.googleapis.com/books/v1/volumes" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
