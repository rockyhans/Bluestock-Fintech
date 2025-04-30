import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  blogs = [
    {
      title: 'Top Reasons for Life Insurance Claim Rejection',
      date: '04 January 2024',
      readTime: '4 min read',
    },
    {
      title: 'Best PSU Stocks in India',
      date: '26 December 2023',
      readTime: '5 min read',
    },
    {
      title: 'Banking & Financial Services Fund',
      date: '18 December 2023',
      readTime: '7 min read',
    },
    {
      title: 'INOX India IPO – Everything You Must Know',
      date: '11 December 2023',
      readTime: '4 min read',
    },
    {
      title: 'Types of Banking Frauds – How to Prevent Them',
      date: '08 December 2023',
      readTime: '5 min read',
    },
    {
      title: 'Popular Finance Podcasts in India',
      date: '30 November 2023',
      readTime: '3 min read',
    },
  ];
}
