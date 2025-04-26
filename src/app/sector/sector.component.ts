import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sector.component.html',
  styleUrl: './sector.component.css' 
})
export class SectorComponent {
  abrasivesData = {
    title: 'Abrasives',
    description: 'The one that scraps away all inconsistencies.',
    listedCompanies: 3,
    micro: 1,
    small: 2,
    mid: 0,
    large: 0
  };
}
