import { Component } from '@angular/core';
import { SkillCarouselComponent } from 'src/app/components/skill-carousel/skill-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SkillCarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}
}
