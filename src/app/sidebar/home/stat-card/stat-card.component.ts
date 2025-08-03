import { DecimalPipe } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';

import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css'], // لو حابب تضيف استايل
  standalone: true,
  imports: [DecimalPipe, NgChartsModule],
})
export class StatCardComponent implements OnChanges {
  @Input() title: string = '';
  @Input() total: number = 0;
  @Input() targetDiffPercent: number = 0;
  @Input() followersHistory: number[] = [];

  chartData!: ChartData<'line'>;
  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: 'easeInOutQuad',
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 13 },
        padding: 10,
        borderColor: '#999',
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1000,
          color: '#555',
        },
        grid: {
          color: '#eee',
        },
      },
      x: {
        ticks: {
          color: '#555',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  get isIncrease(): boolean {
    return this.targetDiffPercent >= 0;
  }

  get trendColor(): string {
    return this.isIncrease ? 'green' : 'red';
  }

  get trendArrow(): string {
    return this.isIncrease ? '▲' : '▼';
  }

  ngOnChanges(): void {
    const maxY = Math.max(...this.followersHistory) + 1000;
    const baseColor = this.isIncrease ? '0, 128, 0' : '255, 0, 0';

    this.chartData = {
      labels: this.followersHistory.map((_, i) => `Day ${i + 1}`),
      datasets: [
        {
          label: 'Followers',
          data: this.followersHistory,
          borderColor: this.trendColor,
          backgroundColor: `rgba(${baseColor}, 0.2)`,
          tension: 0.4,
          fill: true,
          pointRadius: 3,
          pointHoverRadius: 6,
          pointBackgroundColor: this.trendColor,
          pointHoverBackgroundColor: '#fff',
        },
      ],
    };

    // تعديل مقياس Y حسب البيانات
    this.chartOptions.scales!['y']!.max = maxY;
  }
}
