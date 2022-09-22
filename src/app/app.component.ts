import { Component } from '@angular/core';
import {CountService} from "./count.service";

@Component({ // @decorator - makes this TS class a component
  selector: 'app-root',
  template: `

<!--  bind property to HTML in the template-->
    <p>{{ counter.count }}</p>

<!--  event binding: event name on the left side and expression in the right side-->
    <button (click)="counter.like()"> 👍 </button>

<!--  Angular directives-->

<!--  *ngIf: conditional logic-->
<!--    <p *ngIf="counter.count >= 1">{{ counter.count }}</p>-->

<!--*ngFor: loop over an array-->
<!--    <p *ngFor="let emoji of emojis">-->
<!--      {{ emoji }}-->
<!--    </p>-->

`
})
export class AppComponent {

  // count = 0; // property is considered reactive state & when values change, the component re-renders the UI
  //
  // like() {
  //
  //   this.count++;
  //
  // }

  constructor(public counter: CountService) {
  }

  // emojis = ['👋', '🙌', '🙏'];

}
