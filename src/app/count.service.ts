// service(global singleton) to share data and functionality between components
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  count = 0;

  like() {
    this.count++;
  }

}
