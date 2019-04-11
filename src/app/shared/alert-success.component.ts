import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-success',
  template: `
    <div class="alert alert-success show" *ngIf="successMessage.length > 0" role="alert">
      {{successMessage}}
    </div>
  `,
  styles: []
})
export class AlertSuccessComponent implements OnInit {

  @Input() successMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
