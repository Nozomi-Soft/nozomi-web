import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-error',
  template: `
    <div class="alert alert-danger show" *ngIf="errorMessage.length > 0" role="alert">
      {{errorMessage}}
    </div>
  `,
  styles: []
})
export class AlertErrorComponent implements OnInit {

  @Input() errorMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
