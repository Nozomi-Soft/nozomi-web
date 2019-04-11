import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-warning',
  template: `
    <div class="alert alert-warning show" *ngIf="successMessage.length > 0" role="alert">
      {{successMessage}}
    </div>
  `,
  styles: []
})
export class AlertWarningComponent implements OnInit {

  @Input() warningMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
