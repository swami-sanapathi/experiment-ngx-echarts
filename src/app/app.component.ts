import { Component } from '@angular/core';
import { ChartCmp } from './charts/chart.component';
@Component({
    selector: 'app-root',
    standalone: true,
    template: ` <app-chart /> `,
    imports: [ChartCmp]
})
export class AppComponent {}
