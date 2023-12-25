import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { BtnCmp } from './btn.component';
import { getSubChartOptions } from './const';

@Component({
    selector: 'app-chart',
    standalone: true,
    template: `
        <app-btn (chart)="changeChart($event)" />
        <br />

        <div echarts [options]="chartOption" class="demo-chart"></div>
    `,
    styles: [
        `
            .demo-chart {
                height: 800px;
                width: 50%;
                margin: 0 auto;
            }
        `
    ],
    host: {
        class: 'btn-cmp'
    },
    imports: [NgxEchartsDirective, BtnCmp],
    providers: [provideEcharts()]
})
export class ChartCmp {
    chartOption!: EChartsOption;
    constructor() {
        this.changeChart('Basic Line');
    }

    // change chart options accordingly when new chart is selected
    changeChart(chart: string) {
        this.chartOption = getSubChartOptions(chart) as EChartsOption;
    }
}
