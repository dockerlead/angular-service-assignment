import { EventEmitter } from '@angular/core';

export class CounterService {
  actionEvent = new EventEmitter<string>();
  numActions: number = 0;

  addAction() {
    this.numActions ++;
    this.actionEvent.emit('actionOccurred');
  }
}
