import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  totalActions: number = this.counterService.numActions;

  constructor(private counterService: CounterService) {
    counterService.actionEvent.subscribe(message => {
      this.totalActions ++;
    });
  }
}
