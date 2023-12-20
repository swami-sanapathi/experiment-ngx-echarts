import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [NgxEchartsDirective],
    template: ` <div echarts [options]="chartOption" class="demo-chart"></div> `,
    providers: [provideEcharts()],
    styles: `
    .demo-chart {
        height: 400px;
    }
`
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
