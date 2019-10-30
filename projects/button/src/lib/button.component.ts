import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
  <button [disabled]="disabled">{{text}}</button>
  `,
  styles: []
})

/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/

export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit() {
  }

}
