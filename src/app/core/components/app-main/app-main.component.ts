import { trigger, style, animate, query, transition } from '@angular/animations';
import { Component } from '@angular/core';

/**
 * Application main component. Hosts primary application router outlet.
 */
@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('* => *', [
        query(':enter', [style({ opacity: 0 })], { optional: true }),
        query(':leave', [style({ opacity: 1 }), animate('500ms', style({ opacity: 0 }))], { optional: true }),
        query(':enter', [style({ opacity: 0 }), animate('500ms', style({ opacity: 1 }))], { optional: true }),
      ]),
    ]),
  ],
})
export class AppMainComponent {}
