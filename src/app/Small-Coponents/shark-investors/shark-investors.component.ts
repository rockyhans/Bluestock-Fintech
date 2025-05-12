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
      image: '../../assets/Brokers/Jhunjhunwala.jpg',
    },
    {
      name: 'Anil Goel',
      image: '../../assets/Brokers/Goel.png',
    },
    {
      name: 'Ashish Dhawan',
      image: '../../assets/Brokers/Ashish.png',
    },
    {
      name: 'Ashish Kacholia',
      image: '../../assets/Brokers/Kacholia.png', 
    }
  ];
}