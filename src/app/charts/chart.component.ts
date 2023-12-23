import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { BtnCmp } from './btn.component';

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
    imports: [NgxEchartsDirective, BtnCmp],
    providers: [provideEcharts()]
})
export class ChartCmp {
    chartOption!: EChartsOption;
    // change chart options accordingly when new chart is selected
    changeChart(chart: string) {
        switch (chart) {
            case 'line':
                this.chartOption = {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: [150, 230, 224, 218, 135, 147, 260],
                            type: 'line'
                        }
                    ]
                };
                break;
            case 'bar':
                this.chartOption = {
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
                            type: 'bar'
                        }
                    ]
                };
                break;
            case 'pie':
                this.chartOption = {
                    series: [
                        {
                            type: 'pie',
                            data: [
                                { value: 1048, name: 'Search Engine' },
                                { value: 735, name: 'Direct' },
                                { value: 580, name: 'Email' },
                                { value: 484, name: 'Union Ads' },
                                { value: 300, name: 'Video Ads' }
                            ]
                        }
                    ]
                };
                break;
            // write options for all the charts 'line', 'bar', 'pie', 'scatter', 'effectScatter', 'radar', 'tree', 'treemap', 'sunburst', 'boxplot', 'candlestick', 'heatmap', 'map', 'parallel', 'lines', 'graph', 'sankey', 'funnel', 'gauge', 'pictorialBar', 'themeRiver', 'custom', 'liquidFill'
            case 'scatter':
                this.chartOption = {
                    xAxis: {},
                    yAxis: {},
                    series: [
                        {
                            symbolSize: 20,
                            data: [
                                [10.0, 8.04],
                                [8.0, 6.95],
                                [13.0, 7.58],
                                [9.0, 8.81],
                                [11.0, 8.33],
                                [14.0, 9.96],
                                [6.0, 7.24],
                                [4.0, 4.26],
                                [12.0, 10.84],
                                [7.0, 4.82],
                                [5.0, 5.68]
                            ],
                            type: 'scatter'
                        }
                    ]
                };
                break;
            case 'effectScatter':
                this.chartOption = {
                    xAxis: {},
                    yAxis: {},
                    series: [
                        {
                            symbolSize: 20,
                            data: [
                                [10.0, 8.04],
                                [8.0, 6.95],
                                [13.0, 7.58],
                                [9.0, 8.81],
                                [11.0, 8.33],
                                [14.0, 9.96],
                                [6.0, 7.24],
                                [4.0, 4.26],
                                [12.0, 10.84],
                                [7.0, 4.82],
                                [5.0, 5.68]
                            ],
                            type: 'effectScatter'
                        }
                    ]
                };
                break;
            case 'radar':
                this.chartOption = {
                    radar: {
                        indicator: [
                            { name: 'Sales', max: 6500 },
                            { name: 'Administration', max: 16000 },
                            { name: 'Information Techology', max: 30000 },
                            { name: 'Customer Support', max: 38000 },
                            { name: 'Development', max: 52000 },
                            { name: 'Marketing', max: 25000 }
                        ]
                    },
                    series: [
                        {
                            type: 'radar',
                            data: [
                                {
                                    value: [4300, 10000, 28000, 35000, 50000, 19000],
                                    name: 'Allocated Budget'
                                },
                                {
                                    value: [5000, 14000, 28000, 31000, 42000, 21000],
                                    name: 'Actual Spending'
                                }
                            ]
                        }
                    ]
                };
                break;
            case 'tree':
                this.chartOption = {
                    series: [
                        {
                            type: 'tree',
                            data: [
                                {
                                    name: 'nodeA',
                                    children: [
                                        { name: 'nodeAa', value: 40 },
                                        { name: 'nodeAb', value: 20 }
                                    ]
                                },
                                { name: 'nodeB', value: 40 }
                            ]
                        }
                    ]
                };
                break;
            case 'treemap':
                this.chartOption = {
                    series: [
                        {
                            type: 'treemap',
                            data: [
                                {
                                    name: 'nodeA',
                                    children: [
                                        { name: 'nodeAa', value: 40 },
                                        { name: 'nodeAb', value: 20 }
                                    ]
                                },
                                { name: 'nodeB', value: 40 }
                            ]
                        }
                    ]
                };
                break;
            case 'sunburst':
                this.chartOption = {
                    series: [
                        {
                            type: 'sunburst',
                            data: [
                                {
                                    name: 'nodeA',
                                    children: [
                                        { name: 'nodeAa', value: 40 },
                                        { name: 'nodeAb', value: 20 }
                                    ]
                                },
                                { name: 'nodeB', value: 40 }
                            ]
                        }
                    ]
                };
                break;
            case 'boxplot':
                this.chartOption = {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: [
                                [820, 932, 901, 934, 1290, 1330, 1320],
                                [820, 932, 901, 934, 1290, 1330, 1320],
                                [820, 932, 901, 934, 1290, 1330, 1320],
                                [820, 932, 901, 934, 1290, 1330, 1320],
                                [820, 932, 901, 934, 1290, 1330, 1320],
                                [820, 932, 901, 934, 1290, 1330, 1320],
                                [820, 932, 901, 934, 1290, 1330, 1320]
                            ],
                            type: 'boxplot'
                        }
                    ]
                };
                break;
            case 'candlestick':
                this.chartOption = {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    }
                };
                break;
            case 'heatmap':
                this.chartOption = {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    visualMap: {
                        min: 0,
                        max: 10000,
                        calculable: true,
                        orient: 'horizontal',
                        left: 'center',
                        bottom: '15%'
                    },
                    series: [
                        {
                            type: 'heatmap',
                            data: [
                                [0, 0, 5],
                                [0, 1, 1],
                                [0, 2, 0],
                                [0, 3, 0],
                                [0, 4, 0],
                                [0, 5, 0],
                                [0, 6, 0],
                                [0, 7, 0],
                                [0, 8, 0],
                                [0, 9, 0],
                                [0, 10, 0],
                                [0, 11, 2],
                                [0, 12, 4],
                                [0, 13, 1],
                                [0, 14, 1],
                                [0, 15, 3],
                                [0, 16, 4],
                                [0, 17, 6],
                                [0, 18, 4],
                                [0, 19, 4],
                                [0, 20, 3],
                                [0, 21, 3],
                                [0, 22, 2],
                                [0, 23, 5],
                                [1, 0, 7],
                                [1, 1, 0],
                                [1, 2, 0],
                                [1, 3, 0],
                                [1, 4, 0],
                                [1, 5, 0],
                                [1, 6, 0],
                                [1, 7, 0],
                                [1, 8, 0],
                                [1, 9, 0],
                                [1, 10, 5],
                                [1, 11, 2],
                                [1, 12, 2],
                                [1, 13, 6],
                                [1, 14, 9],
                                [1, 15, 11],
                                [1, 16, 6],
                                [1, 17, 7],
                                [1, 18, 8],
                                [1, 19, 12],
                                [1, 20, 5],
                                [1, 21, 5],
                                [1, 22, 7],
                                [1, 23, 2],
                                [2, 0, 1],
                                [2, 1, 1],
                                [2, 2, 0],
                                [2, 3, 0],
                                [2, 4, 0],
                                [2, 5, 0],
                                [2, 6, 0],
                                [2, 7, 0],
                                [2, 8, 0],
                                [2, 9, 0],
                                [2, 10, 3],
                                [2, 11, 2],
                                [2, 12, 1],
                                [2, 13, 9],
                                [2, 14, 8],
                                [2, 15, 10],
                                [2, 16, 6],
                                [2, 17, 5],
                                [2, 18, 5],
                                [2, 19, 5],
                                [2, 20, 7],
                                [2, 21, 4],
                                [2, 22, 2],
                                [2, 23, 4],
                                [3, 0, 7],
                                [3, 1, 3],
                                [3, 2, 0],
                                [3, 3, 0],
                                [3, 4, 0],
                                [3, 5, 0],
                                [3, 6, 0],
                                [3, 7, 0],
                                [3, 8, 1],
                                [3, 9, 0],
                                [3, 10, 5],
                                [3, 11, 4],
                                [3, 12, 7],
                                [3, 13, 14],
                                [3, 14, 13],
                                [3, 15, 12],
                                [3, 16, 9],
                                [3, 17, 5],
                                [3, 18, 5],
                                [3, 19, 10],
                                [3, 20, 6],
                                [3, 21, 4],
                                [3, 22, 4],
                                [3, 23, 1],
                                [4, 0, 1],
                                [4, 1, 3],
                                [4, 2, 0],
                                [4, 3, 0],
                                [4, 4, 0],
                                [4, 5, 1],
                                [4, 6, 0],
                                [4, 7, 0],
                                [4, 8, 0],
                                [4, 9, 2],
                                [4, 10, 4],
                                [4, 11, 4],
                                [4, 12, 2],
                                [4, 13, 4],
                                [4, 14, 4],
                                [4, 15, 14],
                                [4, 16, 12],
                                [4, 17, 1],
                                [4, 18, 8],
                                [4, 19, 5],
                                [4, 20, 3],
                                [4, 21, 7],
                                [4, 22, 3],
                                [4, 23, 0],
                                [5, 0, 2],
                                [5, 1, 1],
                                [5, 2, 0],
                                [5, 3, 3],
                                [5, 4, 0],
                                [5, 5, 0],
                                [5, 6, 0],
                                [5, 7, 0],
                                [5, 8, 2],
                                [5, 9, 0],
                                [5, 10, 4],
                                [5, 11, 1],
                                [5, 12, 5],
                                [5, 13, 10],
                                [5, 14, 5],
                                [5, 15, 7],
                                [5, 16, 11],
                                [5, 17, 6],
                                [5, 18, 0],
                                [5, 19, 5],
                                [5, 20, 3],
                                [5, 21, 4],
                                [5, 22, 2],
                                [5, 23, 0],
                                [6, 0, 1],
                                [6, 1, 0],
                                [6, 2, 0],
                                [6, 3, 0],
                                [6, 4, 0],
                                [6, 5, 0],
                                [6, 6, 0],
                                [6, 7, 0],
                                [6, 8, 0],
                                [6, 9, 0],
                                [6, 10, 1],
                                [6, 11, 0],
                                [6, 12, 2],
                                [6, 13, 1],
                                [6, 14, 3],
                                [6, 15, 4],
                                [6, 16, 0],
                                [6, 17, 0],
                                [6, 18, 0],
                                [6, 19, 0],
                                [6, 20, 1],
                                [6, 21, 2],
                                [6, 22, 2],
                                [6, 23, 6]
                            ],
                            label: {
                                show: true
                            }
                        }
                    ]
                };
                break;
            case 'map':
                this.chartOption = {
                    series: [
                        {
                            type: 'map',
                            map: 'china'
                        }
                    ]
                };
                break;
            case 'parallel':
                this.chartOption = {
                    parallelAxis: [
                        { dim: 0, name: 'Price' },
                        { dim: 1, name: 'Net Weight' },
                        { dim: 2, name: 'Amount' },
                        {
                            dim: 3,
                            name: 'Score',
                            type: 'category',
                            data: ['Excellent', 'Good', 'OK', 'Bad']
                        }
                    ],
                    series: [
                        {
                            type: 'parallel',
                            lineStyle: {
                                width: 4
                            },
                            data: [
                                [12.99, 100, 82, 'Good'],
                                [9.99, 80, 77, 'OK'],
                                [20, 120, 60, 'Excellent']
                            ]
                        }
                    ]
                };
                break;
            case 'lines':
                this.chartOption = {
                    series: [
                        {
                            type: 'lines',
                            data: [
                                {
                                    coords: [
                                        [0, 0],
                                        [100, 100]
                                    ]
                                }
                            ]
                        }
                    ]
                };
                break;
            case 'graph':
                this.chartOption = {
                    series: [
                        {
                            type: 'graph',
                            data: [
                                {
                                    name: 'nodeA',
                                    x: 10,
                                    y: 10
                                },
                                {
                                    name: 'nodeB',
                                    x: 20,
                                    y: 20
                                }
                            ]
                        }
                    ]
                };
                break;
            // case 'sankey':
            //     this.chartOption = {
            //         series: [
            //             {
            //                 type: 'sankey',
            //                 data: [
            //                     {
            //                         name: 'nodeA',
            //                         x: 10,
            //                         y: 10
            //                     },
            //                     {
            //                         name: 'nodeB',
            //                         x: 20,
            //                         y: 20
            //                     }
            //                 ]
            //             }
            //         ]
            //     };
            //     break;
            // case 'funnel':
            //     this.chartOption = {
            //         series: [
            //             {
            //                 type: 'funnel',
            //                 data: [
            //                     {
            //                         name: 'nodeA',
            //                         x: 10,
            //                         y: 10
            //                     },
            //                     {
            //                         name: 'nodeB',
            //                         x: 20,
            //                         y: 20
            //                     }
            //                 ]
            //             }
            //         ]
            //     };

            //     break;
            // case 'gauge':
            //     this.chartOption = {
            //         series: [
            //             {
            //                 type: 'gauge',
            //                 data: [
            //                     {
            //                         name: 'nodeA',
            //                         x: 10,
            //                         y: 10
            //                     },
            //                     {
            //                         name: 'nodeB',
            //                         x: 20,
            //                         y: 20
            //                     }
            //                 ]
            //             }
            //         ]
            //     };
            //     break;
            // case 'pictorialBar':
            //     this.chartOption = {
            //         series: [
            //             {
            //                 type: 'pictorialBar',
            //                 data: [
            //                     {
            //                         name: 'nodeA',
            //                         x: 10,
            //                         y: 10
            //                     },
            //                     {
            //                         name: 'nodeB',
            //                         x: 20,
            //                         y: 20
            //                     }
            //                 ]
            //             }
            //         ]
            //     };
            //     break;
            // case 'themeRiver':
            //     this.chartOption = {
            //         series: [
            //             {
            //                 type: 'themeRiver',
            //                 data: [
            //                     {
            //                         name: 'nodeA',
            //                         x: 10,
            //                         y: 10
            //                     },
            //                     {
            //                         name: 'nodeB',
            //                         x: 20,
            //                         y: 20
            //                     }
            //                 ]
            //             }
            //         ]
            //     };
            //     break;
            // case 'custom':
            //     this.chartOption = {
            //         series: [
            //             {
            //                 type: 'custom',
            //                 data: [
            //                     {
            //                         name: 'nodeA',
            //                         x: 10,
            //                         y: 10
            //                     },
            //                     {
            //                         name: 'nodeB',
            //                         x: 20,
            //                         y: 20
            //                     }
            //                 ]
            //             }
            //         ]
            //     };
            //     break;
            // case 'liquidFill':
            // this.chartOption = {
            //     series: [
            //         {
            //             type: 'liquidFill',
            //             data: [
            //                 {
            //                     name: 'nodeA',
            //                     x: 10,
            //                     y: 10
            //                 },
            //                 {
            //                     name: 'nodeB',
            //                     x: 20,
            //                     y: 20
            //                 }
            //             ]
            //         }
            //     ]
            // };
            // break;
        }
    }
}
