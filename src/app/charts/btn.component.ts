import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, signal } from '@angular/core';
import { CHARTS, ChartType, SUB_CHARTS_MAP } from './const';
@Component({
    selector: 'app-btn',
    standalone: true,
    template: `
        @for (chart of charts(); track $index) {
            <button (click)="changeChart(chart)" [class.selected]="chart === selectedChart()">
                {{ chart | titlecase }}
            </button>
        }

        <div>
            @for (chart of subCharts(); track $index) {
                <button (click)="changeSubChart(chart)" [class.selected]="chart === selectedSubChart()">
                    {{ chart | titlecase }}
                </button>
            }
        </div>
    `,
    imports: [TitleCasePipe],
    styles: `
    .sub-charts {
        margin-left: 20px;
    }
    .selected {
        background-color: #ccc;
    }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BtnCmp {
    charts = signal<ChartType[]>([]);
    selectedChart = signal<string>('line');
    selectedSubChart = signal<string>('Basic Line');
    subCharts = signal<string[]>([]);
    @Output() chart = new EventEmitter<string>();
    constructor() {
        this.charts.set(CHARTS as ChartType[]);
        this.subCharts.set(SUB_CHARTS_MAP['line']);
    }

    changeChart(chart: ChartType) {
        this.subCharts.set(SUB_CHARTS_MAP[chart]);
        this.chart.emit(SUB_CHARTS_MAP[chart][0]);
        this.selectedSubChart.set(SUB_CHARTS_MAP[chart][0]);
        this.selectedChart.set(chart);
    }

    changeSubChart(chart: string) {
        this.chart.emit(chart);
        this.selectedSubChart.set(chart);
    }
}
