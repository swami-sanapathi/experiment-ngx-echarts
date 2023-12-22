import { TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-btn',
    standalone: true,
    template: `
        @for (chart of charts; track $index) {
            <button (click)="changeChart(chart)">{{ chart | titlecase }}</button>
        }
    `,
    imports: [TitleCasePipe],
    styles: `
    buttton {
        background-color: red;
    }
    `
})
export class BtnCmp {
    charts: string[];
    @Output() chart = new EventEmitter<string>();
    constructor() {
        this.charts = [
            'line',
            'bar',
            'pie',
            'scatter',
            'effectScatter',
            'radar',
            'tree',
            'treemap',
            'sunburst',
            'boxplot',
            'candlestick',
            'heatmap',
            'map',
            'parallel',
            'lines',
            'graph',
            'sankey',
            'funnel',
            'gauge',
            'pictorialBar',
            'themeRiver',
            'custom',
            'liquidFill'
        ];
    }

    changeChart(chart: string) {
        this.chart.emit(chart);
    }
}
