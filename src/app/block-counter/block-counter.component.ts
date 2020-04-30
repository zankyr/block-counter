import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-counter',
  template: `
    <button (click)="updateCount(-1)" [disabled]="!count"> -</button>
    <button (click)="updateCount()"> +</button>
    <span [innerHTML]="blocks" class="blocks"></span>
    {{count || 'none'}}`,
  styles: ['.blocks {color: PaleGreen;}']
})
export class BlockCounterComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  updateCount(increment = 1) {
    this.count += increment;
  }

  get blocks() {
    return '&#9609;'.repeat(this.count);
  }

}
