import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ChartCmp } from './charts/chart.component';
@Component({
    selector: 'app-root',
    standalone: true,
    template: ` <app-chart /> `,
    styles: `
    .demo-chart {
        height: 600px;
    }
`,
    imports: [ChartCmp]
})
export class AppComponent {
    title = 'charts';
    chartOption: EChartsOption = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }
        ]
    };
}
