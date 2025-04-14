import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard">
      <h1>Welcome to Dashboard</h1>
      <p>This is your main dashboard page</p>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 20px;
      color: #ffffff;
    }
  `]
})
export class DashboardComponent {} 