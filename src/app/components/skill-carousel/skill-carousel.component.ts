import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { NgxFastMarqueeModule } from 'ngx-fast-marquee';
import { skillCarouselItems } from './skill-carousel.constants';

@Component({
  selector: 'app-skill-carousel',
  standalone: true,
  imports: [NgxFastMarqueeModule, CommonModule],
  templateUrl: './skill-carousel.component.html',
  styleUrls: ['./skill-carousel.component.scss'],
})
export class SkillCarouselComponent {
  items = skillCarouselItems;

  shuffledItems = this.items.sort(() => Math.random() - 0.5);
}
