import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div *ngIf="show" class="loader-container">
      <img src="../../../assets/imgs/gan-logo.png" class="spinning-logo" alt="">
    </div>
  `,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() show: boolean = false;
}
