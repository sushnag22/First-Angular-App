import { Component } from '@angular/core';

@Component({ // @decorator - makes this TS class a component
  selector: 'app-root',
  template: `

  <!-- bind property to HTML in the template-->
  <p>{{ count }}</p>

<!--  event binding-->
  <button (click)="like()"> 👍 </button>

`
})
export class AppComponent {

  count = 0; // property is considered reactive state & when values change, the component re-renders the UI

  like() {

    this.count++;

  }
}
