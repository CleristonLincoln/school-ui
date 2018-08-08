import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="temErro()" class="ui-message ui-messages-error">
      {{ text }}
    </div>
  `,
  styles: [`
    .ui-messages-error {
      margin: 0;
      margin-top: 4px;
    }
  `]
})


export class MessageComponent {

  @Input() erro: string;
  @Input() control: FormControl;
  @Input() text: string;

  temErro(): boolean {
    return this.control.hasError(this.erro) && this.control.dirty;
  }
}
