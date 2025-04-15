import { Component } from '@angular/core';
import { SkillCarouselComponent } from 'src/app/components/skill-carousel/skill-carousel.component';

@Component({
  selector: 'app-home',
  imports: [SkillCarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
})
export class HomeComponent {
  constructor() {}
}
