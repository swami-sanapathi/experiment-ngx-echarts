import { EChartsOption } from 'echarts';
export const CHARTS = ['line', 'bar', 'pie', 'funnel'];

export type ChartType = keyof typeof SUB_CHARTS_MAP;
export const SUB_CHARTS_MAP = {
    line: [
        'Basic Line',
        'Smoothed Line',
        'Stacked Area',
        'Basic area',
        'Stacked Line',
        'Gradient Stacked Area',
        'Bump (Ranking)',
        'Temperature Change in the Coming Week',
        'Area Pieces',
        'Data Transform Filter',
        'Line Gradient',
        'Distribution of Electricity'
    ],
    bar: ['Basic Bar', 'Set Style of Single Bar.', 'Waterfall Chart', 'Bar Chart with Negative Value'],
    pie: ['Referer of a Website', 'Doughnut Chart with Rounded Corner', 'Doughnut Chart', 'Half Doughnut Chart'],

    funnel: ['Funnel', 'Funnel Compare', 'Customized Funnel', 'Multiple Funnels'],
    dataset: [
        'Dataset Basics',
        'Dataset Link',
        'Dataset Transform',
        'Dataset Filter',
        'Dataset Sort',
        'Dataset Statistics',
        'Dataset Dimension',
        'Dataset Dimension Statistics',
        'Dataset Dimension Filter',
        'Dataset Dimension Top N',
        'Dataset Dimension Sort',
        'Dataset Dimension Stack',
        'Dataset Dimension Fold',
        'Dataset Dimension Fold Inner',
        'Dataset Dimension Fold Outer'
    ]
};

export function getSubChartOptions(sub_chart: string) {
    let options: EChartsOption = {};
    switch (sub_chart) {
        case 'Basic Line':
            options = {
                darkMode: 'auto',
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
        case 'Smoothed Line':
            options = {
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
                        type: 'line',
                        smooth: true
                    }
                ]
            };
            break;
        case 'Stacked Area':
            options = {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        areaStyle: {}
                    },
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        areaStyle: {}
                    },
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        areaStyle: {}
                    }
                ]
            };
            break;
        case 'Basic area':
            options = {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        areaStyle: {}
                    }
                ]
            };
            break;
        case 'Stacked Line':
            options = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'line',
                        stack: 'stack'
                    },
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        stack: 'stack'
                    }
                ]
            };
            break;
        case 'Gradient Stacked Area':
            options = {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [
                            820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901,
                            934, 1290, 1330, 1320
                        ],
                        type: 'line',
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'red' // color at 0% position
                                    },
                                    {
                                        offset: 1,
                                        color: 'blue' // color at 100% position
                                    }
                                ]
                            }
                        }
                    }
                ]
            };
            break;
        case 'Bump (Ranking)':
            options = {
                xAxis: {
                    type: 'category',
                    data: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [2, 4, 5, 3, 2, 1, 0],
                        type: 'line',
                        smooth: true
                    }
                ]
            };
            break;
        case 'Temperature Change in the Coming Week':
            options = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                },
                series: [
                    {
                        data: [11, 11, 15, 13, 12, 13, 10],
                        type: 'line',
                        smooth: true
                    }
                ]
            };
            break;
        case 'Area Pieces':
            options = {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                },
                series: [
                    {
                        data: [11, 11, 15, 13, 12, 13, 10],
                        type: 'line',
                        areaStyle: {}
                    }
                ]
            };
            break;
        case 'Data Transform Filter':
            options = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [11, 11, 15, 13, 12, 13, 10],
                        type: 'line'
                    }
                ]
            };
            break;
        case 'Line Gradient':
            options = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [11, 11, 15, 13, 12, 13, 10],
                        type: 'line',
                        lineStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'red' // color at 0% position
                                    },
                                    {
                                        offset: 1,
                                        color: 'blue' // color at 100% position
                                    }
                                ]
                            }
                        }
                    }
                ]
            };
            break;
        case 'Distribution of Electricity':
            options = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [11, 11, 15, 13, 12, 13, 10],
                        type: 'line',
                        areaStyle: {}
                    }
                ]
            };
            break;
        case 'Basic Bar':
            options = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [11, 11, 15, 13, 12, 13, 10],
                        type: 'bar'
                    }
                ]
            };
            break;
        case 'Set Style of Single Bar.':
            options = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        itemStyle: {
                            color: 'red'
                        },
                        data: [11, 11, 15, 13, 12, 13, 10],
                        type: 'bar'
                    }
                ]
            };
            break;
        case 'Waterfall Chart':
            options = {
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
                            {
                                value: 120,
                                itemStyle: {
                                    color: '#ff0000'
                                }
                            },
                            {
                                value: 132,
                                itemStyle: {
                                    color: '#ff0000'
                                }
                            },
                            {
                                value: 101,
                                itemStyle: {
                                    color: '#00ff00'
                                }
                            },
                            {
                                value: 134,
                                itemStyle: {
                                    color: '#ff0000'
                                }
                            },
                            {
                                value: 90,
                                itemStyle: {
                                    color: '#00ff00'
                                }
                            },
                            {
                                value: 230,
                                itemStyle: {
                                    color: '#ff0000'
                                }
                            },
                            {
                                value: 210,
                                itemStyle: {
                                    color: '#00ff00'
                                }
                            }
                        ],
                        type: 'bar'
                    }
                ]
            };
            break;
        case 'Bar Chart with Negative Value':
            const labelRight = {
                position: 'right'
            } as const;

            options = {
                title: {
                    text: 'Bar Chart with Negative Value'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    top: 80,
                    bottom: 30
                },
                xAxis: {
                    type: 'value',
                    position: 'top',
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                },
                yAxis: {
                    type: 'category',
                    axisLine: { show: false },
                    axisLabel: { show: false },
                    axisTick: { show: false },
                    splitLine: { show: false },
                    data: ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
                },
                series: [
                    {
                        name: 'Cost',
                        type: 'bar',
                        stack: 'Total',
                        label: {
                            show: true,
                            formatter: '{b}'
                        },
                        data: [
                            { value: -0.07, label: labelRight },
                            { value: -0.09, label: labelRight },
                            0.2,
                            0.44,
                            { value: -0.23, label: labelRight },
                            0.08,
                            { value: -0.17, label: labelRight },
                            0.47,
                            { value: -0.36, label: labelRight },
                            0.18
                        ]
                    }
                ]
            };

            break;
        case 'Referer of a Website':
            options = {
                title: {
                    text: 'Referer of a Website',
                    subtext: 'Fake Data',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            break;
        case 'Doughnut Chart with Rounded Corner':
            options = {
                title: {
                    text: 'Doughnut Chart with Rounded Corner',
                    subtext: 'Fake Data',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '40',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
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
        case 'Doughnut Chart':
            options = {
                title: {
                    text: 'Doughnut Chart',
                    subtext: 'Fake Data',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            break;
        case 'Half Doughnut Chart':
            options = {
                title: {
                    text: 'Half Doughnut Chart',
                    subtext: 'Fake Data',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '40',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
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
        case 'Funnel':
            options = {
                title: {
                    text: 'Funnel'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}%'
                },
                toolbox: {
                    feature: {
                        dataView: { readOnly: false },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                legend: {
                    data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
                },
                series: [
                    {
                        name: 'Funnel',
                        type: 'funnel',
                        left: '10%',
                        top: 60,
                        bottom: 60,
                        width: '80%',
                        min: 0,
                        max: 100,
                        minSize: '0%',
                        maxSize: '100%',
                        sort: 'descending',
                        gap: 2,
                        label: {
                            show: true,
                            position: 'inside'
                        },
                        labelLine: {
                            length: 10,
                            lineStyle: {
                                width: 1,
                                type: 'solid'
                            }
                        },
                        itemStyle: {
                            borderColor: '#fff',
                            borderWidth: 1
                        },
                        emphasis: {
                            label: {
                                fontSize: 20
                            }
                        },
                        data: [
                            { value: 60, name: 'Visit' },
                            { value: 40, name: 'Inquiry' },
                            { value: 20, name: 'Order' },
                            { value: 80, name: 'Click' },
                            { value: 100, name: 'Show' }
                        ]
                    }
                ]
            };
            break;
        case 'Funnel Compare':
            options = {
                title: {
                    text: 'Funnel Compare',
                    subtext: 'Fake Data',
                    left: 'left',
                    top: 'bottom'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}%'
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    top: 'center',
                    feature: {
                        dataView: { readOnly: false },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['Prod A', 'Prod B', 'Prod C', 'Prod D', 'Prod E']
                },

                series: [
                    {
                        name: 'Funnel',
                        type: 'funnel',
                        width: '40%',
                        height: '45%',
                        left: '5%',
                        top: '50%',
                        funnelAlign: 'right',

                        data: [
                            { value: 60, name: 'Prod C' },
                            { value: 30, name: 'Prod D' },
                            { value: 10, name: 'Prod E' },
                            { value: 80, name: 'Prod B' },
                            { value: 100, name: 'Prod A' }
                        ]
                    },
                    {
                        name: 'Pyramid',
                        type: 'funnel',
                        width: '40%',
                        height: '45%',
                        left: '5%',
                        top: '5%',
                        sort: 'ascending',
                        funnelAlign: 'right',

                        data: [
                            { value: 60, name: 'Prod C' },
                            { value: 30, name: 'Prod D' },
                            { value: 10, name: 'Prod E' },
                            { value: 80, name: 'Prod B' },
                            { value: 100, name: 'Prod A' }
                        ]
                    },
                    {
                        name: 'Funnel',
                        type: 'funnel',
                        width: '40%',
                        height: '45%',
                        left: '55%',
                        top: '5%',
                        funnelAlign: 'left',

                        data: [
                            { value: 60, name: 'Prod C' },
                            { value: 30, name: 'Prod D' },
                            { value: 10, name: 'Prod E' },
                            { value: 80, name: 'Prod B' },
                            { value: 100, name: 'Prod A' }
                        ]
                    },
                    {
                        name: 'Pyramid',
                        type: 'funnel',
                        width: '40%',
                        height: '45%',
                        left: '55%',
                        top: '50%',
                        sort: 'ascending',
                        funnelAlign: 'left',

                        data: [
                            { value: 60, name: 'Prod C' },
                            { value: 30, name: 'Prod D' },
                            { value: 10, name: 'Prod E' },
                            { value: 80, name: 'Prod B' },
                            { value: 100, name: 'Prod A' }
                        ]
                    }
                ]
            };

            break;
        case 'Customized Funnel':
            options = {
                title: {
                    text: 'Funnel'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}%'
                },
                toolbox: {
                    feature: {
                        dataView: { readOnly: false },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                legend: {
                    data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
                },
                series: [
                    {
                        name: 'Expected',
                        type: 'funnel',
                        left: '10%',
                        width: '80%',
                        label: {
                            formatter: '{b}Expected'
                        },
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            opacity: 0.7
                        },
                        emphasis: {
                            label: {
                                position: 'inside',
                                formatter: '{b}Expected: {c}%'
                            }
                        },
                        data: [
                            { value: 60, name: 'Visit' },
                            { value: 40, name: 'Inquiry' },
                            { value: 20, name: 'Order' },
                            { value: 80, name: 'Click' },
                            { value: 100, name: 'Show' }
                        ]
                    },
                    {
                        name: 'Actual',
                        type: 'funnel',
                        left: '10%',
                        width: '80%',
                        maxSize: '80%',
                        label: {
                            position: 'inside',
                            formatter: '{c}%',
                            color: '#fff'
                        },
                        itemStyle: {
                            opacity: 0.5,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        emphasis: {
                            label: {
                                position: 'inside',
                                formatter: '{b}Actual: {c}%'
                            }
                        },
                        data: [
                            { value: 30, name: 'Visit' },
                            { value: 10, name: 'Inquiry' },
                            { value: 5, name: 'Order' },
                            { value: 50, name: 'Click' },
                            { value: 80, name: 'Show' }
                        ],
                        // Ensure outer shape will not be over inner shape when hover.
                        z: 100
                    }
                ]
            };
            break;
        case 'Multiple Funnels':
            options = {
                title: {
                    text: 'Funnel',
                    left: 'left',
                    top: 'bottom'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}%'
                },
                toolbox: {
                    orient: 'vertical',
                    top: 'center',
                    feature: {
                        dataView: { readOnly: false },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
                },

                series: [
                    {
                        name: 'Funnel',
                        type: 'funnel',
                        width: '40%',
                        height: '45%',
                        left: '5%',
                        top: '50%',
                        data: [
                            { value: 60, name: 'Visit' },
                            { value: 30, name: 'Inquiry' },
                            { value: 10, name: 'Order' },
                            { value: 80, name: 'Click' },
                            { value: 100, name: 'Show' }
                        ]
                    },
                    {
                        name: 'Pyramid',
                        type: 'funnel',
                        width: '40%',
                        height: '45%',
                        left: '5%',
                        top: '5%',
                        sort: 'ascending',
                        data: [
                            { value: 60, name: 'Visit' },
                            { value: 30, name: 'Inquiry' },
                            { value: 10, name: 'Order' },
                            { value: 80, name: 'Click' },
                            { value: 100, name: 'Show' }
                        ]
                    },
                    {
                        name: 'Funnel',
                        type: 'funnel',
                        width: '40%',
                        height: '45%',
                        left: '55%',
                        top: '5%',
                        label: {
                            position: 'left'
                        },
                        data: [
                            { value: 60, name: 'Visit' },
                            { value: 30, name: 'Inquiry' },
                            { value: 10, name: 'Order' },
                            { value: 80, name: 'Click' },
                            { value: 100, name: 'Show' }
                        ]
                    },
                    {
                        name: 'Pyramid',
                        type: 'funnel',
                        width: '40%',
                        height: '45%',
                        left: '55%',
                        top: '50%',
                        sort: 'ascending',
                        label: {
                            position: 'left'
                        },
                        data: [
                            { value: 60, name: 'Visit' },
                            { value: 30, name: 'Inquiry' },
                            { value: 10, name: 'Order' },
                            { value: 80, name: 'Click' },
                            { value: 100, name: 'Show' }
                        ]
                    }
                ]
            };

            break;
        case 'Dataset Basics':
            options = {
                dataset: {
                    source: [
                        ['score', 'amount', 'product'],
                        [89.3, 58212, 'Matcha Latte'],
                        [57.1, 78254, 'Milk Tea'],
                        [74.4, 41032, 'Cheese Cocoa'],
                        [50.1, 12755, 'Cheese Brownie'],
                        [89.7, 20145, 'Matcha Cocoa'],
                        [68.1, 79146, 'Tea'],
                        [19.6, 91852, 'Orange Juice'],
                        [10.6, 101852, 'Lemon Juice'],
                        [32.7, 20112, 'Walnut Brownie']
                    ]
                },
                title: {
                    text: 'Dataset Basics'
                },
                tooltip: {},
                xAxis: { type: 'category' },
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
            };
            break;
        case 'Dataset Link':
            options = {
                dataset: {
                    source: [
                        ['score', 'amount', 'product'],
                        [89.3, 58212, 'Matcha Latte'],
                        [57.1, 78254, 'Milk Tea'],
                        [74.4, 41032, 'Cheese Cocoa'],
                        [50.1, 12755, 'Cheese Brownie'],
                        [89.7, 20145, 'Matcha Cocoa'],
                        [68.1, 79146, 'Tea'],
                        [19.6, 91852, 'Orange Juice'],
                        [10.6, 101852, 'Lemon Juice'],
                        [32.7, 20112, 'Walnut Brownie']
                    ]
                },
                title: {
                    text: 'Dataset Link'
                },
                tooltip: {},
                xAxis: { type: 'category' },
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
            };
            break;
        case 'Dataset Transform':
            options = {
                dataset: {
                    source: [
                        ['score', 'amount', 'product'],
                        [89.3, 58212, 'Matcha Latte'],
                        [57.1, 78254, 'Milk Tea'],
                        [74.4, 41032, 'Cheese Cocoa'],
                        [50.1, 12755, 'Cheese Brownie'],
                        [89.7, 20145, 'Matcha Cocoa'],
                        [68.1, 79146, 'Tea'],
                        [19.6, 91852, 'Orange Juice'],
                        [10.6, 101852, 'Lemon Juice'],
                        [32.7, 20112, 'Walnut Brownie']
                    ]
                },
                title: {
                    text: 'Dataset Transform'
                },
                tooltip: {},
                xAxis: { type: 'category' },
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
            };
            break;
        case 'Dataset Filter':
            options = {
                dataset: {
                    source: [
                        ['score', 'amount', 'product'],
                        [89.3, 58212, 'Matcha Latte'],
                        [57.1, 78254, 'Milk Tea'],
                        [74.4, 41032, 'Cheese Cocoa'],
                        [50.1, 12755, 'Cheese Brownie'],
                        [89.7, 20145, 'Matcha Cocoa'],
                        [68.1, 79146, 'Tea'],
                        [19.6, 91852, 'Orange Juice'],
                        [10.6, 101852, 'Lemon Juice'],
                        [32.7, 20112, 'Walnut Brownie']
                    ]
                },
                title: {
                    text: 'Dataset Filter'
                },
                tooltip: {},
                xAxis: { type: 'category' },
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
            };
            break;
        case 'Dataset Sort':
            options = {
                dataset: {
                    source: [
                        ['score', 'amount', 'product'],
                        [89.3, 58212, 'Matcha Latte'],
                        [57.1, 78254, 'Milk Tea'],
                        [74.4, 41032, 'Cheese Cocoa'],
                        [50.1, 12755, 'Cheese Brownie'],
                        [89.7, 20145, 'Matcha Cocoa'],
                        [68.1, 79146, 'Tea'],
                        [19.6, 91852, 'Orange Juice'],
                        [10.6, 101852, 'Lemon Juice'],
                        [32.7, 20112, 'Walnut Brownie']
                    ]
                },
                title: {
                    text: 'Dataset Sort'
                },
                tooltip: {},
                xAxis: { type: 'category' },
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
            };
            break;
        case 'Dataset Statistics':
            options = {
                dataset: {
                    source: [
                        ['score', 'amount', 'product'],
                        [89.3, 58212, 'Matcha Latte'],
                        [57.1, 78254, 'Milk Tea'],
                        [74.4, 41032, 'Cheese Cocoa'],
                        [50.1, 12755, 'Cheese Brownie'],
                        [89.7, 20145, 'Matcha Cocoa'],
                        [68.1, 79146, 'Tea'],
                        [19.6, 91852, 'Orange Juice'],
                        [10.6, 101852, 'Lemon Juice'],
                        [32.7, 20112, 'Walnut Brownie']
                    ]
                },
                title: {
                    text: 'Dataset Statistics'
                },
                tooltip: {},
                xAxis: { type: 'category' },
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
            };
            break;
        case 'Dataset Dimension':
            options = {
                dataset: {
                    dimensions: ['product', '2015', '2016', '2017'],
                    source: [
                        { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
                        { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
                        { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
                        { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
                    ]
                },
                title: {
                    text: 'Dataset Dimension'
                },
                tooltip: {},
                xAxis: {
                    type: 'category'
                },
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
            };
            break;
        case 'Dataset Dimension Statistics':
            options = {
                dataset: {
                    dimensions: ['product', '2015', '2016', '2017'],
                    source: [
                        { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
                        { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
                        { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
                        { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
                    ]
                },
                title: {
                    text: 'Dataset Dimension Statistics'
                },
                tooltip: {},
                xAxis: {
                    type: 'category'
                },
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
            };
            break;
        case 'Dataset Dimension Filter':
            options = {
                dataset: {
                    dimensions: ['product', '2015', '2016', '2017'],
                    source: [
                        { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
                        { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
                        { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
                        { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
                    ]
                },
                title: {
                    text: 'Dataset Dimension Filter'
                },
                tooltip: {},
                xAxis: {
                    type: 'category'
                },
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
            };
            break;
        case 'Dataset Dimension Top N':
            options = {
                dataset: {
                    dimensions: ['product', '2015', '2016', '2017'],
                    source: [
                        { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
                        { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
                        { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
                        { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
                    ]
                },
                title: {
                    text: 'Dataset Dimension Top N'
                },
                tooltip: {},
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    type: 'value'
                },
                dataZoom: [
                    {
                        type: 'slider',
                        start: 0,
                        end: 100
                    },
                    {
                        type: 'inside',
                        start: 0,
                        end: 100
                    }
                ],
                series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
            };
            break;
        case 'Dataset Dimension Sort':
            options = {
                darkMode: true,
                dataset: {
                    dimensions: ['product', '2015', '2016', '2017'],
                    source: [
                        { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
                        { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
                        { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
                        { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
                    ]
                },
                title: {
                    text: 'Dataset Dimension Sort'
                },
                tooltip: {},
                xAxis: {
                    type: 'category'
                },
                yAxis: {},
                dataZoom: [
                    {
                        type: 'slider',
                        start: 0,
                        end: 100
                    },
                    {
                        type: 'inside',
                        start: 0,
                        end: 100
                    }
                ],
                series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
            };
            break;
        default:
            options = {};
            break;
    }
    // set toolbox options for all charts
    options.toolbox = {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {
                type: 'jpeg'
            }
        }
    };

    return options;
}
