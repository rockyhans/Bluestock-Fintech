import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shark-investors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shark-investors.component.html',
  styleUrl: './shark-investors.component.css'
})
export class SharkInvestorsComponent {
  investors = [
    {
      name: 'Rakesh Jhunjhunwala',
      image: '../../assets/imagggg.jpg',
    },
    {
      name: 'Anil Goel',
      image: '../../assets/imagggg.jpg',
    },
    {
      name: 'Ashish Dhawan',
      image: '../../assets/imagggg.jpg',
    },
    {
      name: 'Ashish Kacholia',
      image: '../../assets/imagggg.jpg',
    }
  ];
}