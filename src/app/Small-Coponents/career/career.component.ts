import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css',
})
export class CareerComponent {}
