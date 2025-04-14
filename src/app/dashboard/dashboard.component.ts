import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormControl } from '@angular/forms';
import { Chart } from 'chart.js/auto';

interface Category {
  name: string;
  revenue: number;
  percentage: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('salesChart') salesChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('revenueChart') revenueChart!: ElementRef<HTMLCanvasElement>;

  topCategories: Category[] = [
    { name: 'Books', revenue: 3210, percentage: 30 },
    { name: 'Clothing', revenue: 8320, percentage: 65 },
    { name: 'Electronics', revenue: 12450, percentage: 85 },
    { name: 'Home & Kitchen', revenue: 5780, percentage: 45 },
  ];

  private salesChartInstance?: Chart;
  private revenueChartInstance?: Chart;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initializeCharts();
  }

  exportToCsv(): void {
    const data = this.prepareExportData();
    const csvContent = this.convertToCSV(data);
    this.downloadFile(csvContent, 'text/csv', 'dashboard-data.csv');
  }

  exportToPdf(): void {
    // TODO: Implement PDF export
    console.log('PDF export not implemented yet');
  }

  private initializeCharts(): void {
    // Sales Chart
    const salesCtx = this.salesChart.nativeElement.getContext('2d');
    if (salesCtx) {
      this.salesChartInstance = new Chart(salesCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: '#00bcd4',
            backgroundColor: 'rgba(0, 188, 212, 0.1)',
            borderWidth: 2,
            tension: 0.4,
            pointBackgroundColor: '#ffffff',
            pointBorderColor: '#00bcd4',
            pointBorderWidth: 2,
            pointRadius: 4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              titleColor: '#ffffff',
              bodyColor: '#ffffff',
              bodyFont: {
                weight: 'normal'
              },
              padding: 12,
              cornerRadius: 8,
              displayColors: false
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                color: '#64748b',
                font: {
                  size: 12
                }
              }
            },
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(226, 232, 240, 0.5)'
              },
              ticks: {
                color: '#64748b',
                font: {
                  size: 12
                },
                padding: 10
              }
            }
          }
        }
      });
    }

    // Revenue Chart
    const revenueCtx = this.revenueChart.nativeElement.getContext('2d');
    if (revenueCtx) {
      this.revenueChartInstance = new Chart(revenueCtx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Revenue',
            data: [12000, 19000, 15000, 25000, 22000, 30000],
            backgroundColor: 'rgba(0, 188, 212, 0.8)',
            borderColor: '#00bcd4',
            borderWidth: 1,
            borderRadius: 6,
            barThickness: 20
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              titleColor: '#ffffff',
              bodyColor: '#ffffff',
              bodyFont: {
                weight: 'normal'
              },
              padding: 12,
              cornerRadius: 8,
              displayColors: false,
              callbacks: {
                label: function(context) {
                  return `$${(context.raw as number).toLocaleString()}`;
                }
              }
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                color: '#64748b',
                font: {
                  size: 12
                }
              }
            },
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(226, 232, 240, 0.5)'
              },
              ticks: {
                color: '#64748b',
                font: {
                  size: 12
                },
                padding: 10,
                callback: function(value) {
                  return '$' + value.toLocaleString();
                }
              }
            }
          }
        }
      });
    }
  }

  private prepareExportData(): any[] {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const salesData = this.salesChartInstance?.data.datasets[0].data;
    const revenueData = this.revenueChartInstance?.data.datasets[0].data;

    return labels.map((label, index) => ({
      date: label,
      sales: salesData?.[index] || 0,
      revenue: revenueData?.[index] || 0
    }));
  }

  private convertToCSV(data: any[]): string {
    const header = ['Date', 'Sales', 'Revenue'];
    const rows = data.map(item => [item.date, item.sales, item.revenue]);
    return [header, ...rows].map(row => row.join(',')).join('\n');
  }

  private downloadFile(content: string, type: string, filename: string): void {
    const blob = new Blob([content], { type });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(url);
  }
} 